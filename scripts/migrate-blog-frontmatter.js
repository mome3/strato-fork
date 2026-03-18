import fs from "fs";
import path from "path";

const BLOG_DIR = "/vercel/share/v0-project/content/blog";

// Category mapping from old to new
const CATEGORY_MAP = {
  General: "Community",
  Announcement: "Updates",
  "Press Release": "Updates",
  Contest: "Community",
  Community: "Community",
  Updates: "Updates",
  Guides: "Guides",
  Videos: "Videos",
};

// Identify video posts: they have hosts + embed fields
function isVideoPost(frontmatter) {
  return frontmatter.includes("hosts:") && frontmatter.includes("embed:");
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  return { raw: match[1], body: content.slice(match[0].length) };
}

function mapCategory(rawCategories) {
  // rawCategories could be: ["General"], ["General", "Contest"], "Community", etc.
  let cat;
  if (Array.isArray(rawCategories)) {
    cat = rawCategories[0]; // Take the first one
  } else if (typeof rawCategories === "string") {
    // Could be a YAML array string like '["General"]'
    const arrayMatch = rawCategories.match(/\["?(.+?)"?\]/);
    if (arrayMatch) {
      cat = arrayMatch[1].split(",")[0].trim().replace(/"/g, "");
    } else {
      cat = rawCategories;
    }
  } else {
    cat = "Community";
  }

  return CATEGORY_MAP[cat] || "Community";
}

function convertBlogPost(filename, content) {
  const parsed = parseFrontmatter(content);
  if (!parsed) {
    console.log(`  SKIP (no frontmatter): ${filename}`);
    return content;
  }

  const fm = parsed.raw;
  const body = parsed.body;

  // Extract fields using regex
  const title = fm.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1] || "";
  const date = fm.match(/^date:\s*"?(.*?)"?\s*$/m)?.[1] || "";
  const author = fm.match(/^author:\s*"?(.*?)"?\s*$/m)?.[1] || "";
  const description = fm.match(/^description:\s*"?(.*?)"?\s*$/m)?.[1] || "";
  const img = fm.match(/^img:\s*"?(.*?)"?\s*$/m)?.[1] || "";

  // Extract categories - could be array or string
  const catMatch = fm.match(/^categories:\s*(.*)$/m);
  let categories = "Community";
  if (catMatch) {
    const catRaw = catMatch[1].trim();
    // Parse YAML array like ["General"] or ["General", "Contest"]
    const arrayMatch = catRaw.match(/\[(.+)\]/);
    if (arrayMatch) {
      const firstCat = arrayMatch[1]
        .split(",")[0]
        .trim()
        .replace(/"/g, "");
      categories = CATEGORY_MAP[firstCat] || "Community";
    } else {
      categories = CATEGORY_MAP[catRaw.replace(/"/g, "")] || "Community";
    }
  }

  // Check for table_of_contents in blog posts (like return-to-strato.md)
  const hasToc = fm.includes("table_of_contents:");

  // Build new frontmatter
  let newFm = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
description: "${description.replace(/"/g, '\\"')}"
categories: "${categories}"
img: "${img}"
featured: false
author: "${author}"
authorTitle: ""
---`;

  console.log(`  BLOG: ${filename} -> categories: "${categories}"`);
  return newFm + body;
}

function convertVideoPost(filename, content) {
  const parsed = parseFrontmatter(content);
  if (!parsed) {
    console.log(`  SKIP (no frontmatter): ${filename}`);
    return content;
  }

  const fm = parsed.raw;
  const body = parsed.body;

  // Extract fields
  const title = fm.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1] || "";
  const date = fm.match(/^date:\s*"?(.*?)"?\s*$/m)?.[1] || "";
  const img = fm.match(/^img:\s*"?(.*?)"?\s*$/m)?.[1] || "";

  // Description could be multi-line if it has special characters
  // Try single-line first
  let description = fm.match(/^description:\s*"(.*?)"\s*$/m)?.[1] || "";
  if (!description) {
    description =
      fm.match(/^description:\s*(.*?)$/m)?.[1]?.replace(/^"|"$/g, "") || "";
  }

  // Extract embed URL
  const embedUrl = fm.match(/^\s*url:\s*(.*?)\s*$/m)?.[1] || "";

  // Extract hosts
  const hostsMatch = fm.match(/^hosts:\s*\[(.*?)\]/m);
  let hosts = [];
  if (hostsMatch) {
    hosts = hostsMatch[1]
      .split(",")
      .map((h) => h.trim().replace(/"/g, ""));
  }

  // Extract guests
  const guestsMatch = fm.match(/^guests:\s*\[(.*?)\]/m);
  let guests = [];
  if (guestsMatch) {
    guests = guestsMatch[1]
      .split(",")
      .map((g) => g.trim().replace(/"/g, ""));
  }

  const slug = filename.replace(/\.md$/, "");

  // Build author from hosts
  const author = "STRATO Team";

  // Build new frontmatter
  let newFm = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
description: "${description.replace(/"/g, '\\"')}"
categories: "Videos"
img: "${img}"
featured: false
author: "${author}"
authorTitle: ""
slug: "${slug}"
videoUrl: "${embedUrl}"
---`;

  // Build new body with Episode details section
  let newBody = "\n\n## Episode details\n\n";

  // Hosts
  if (hosts.length > 0) {
    newBody += "**Hosts:**  \n";
    for (const host of hosts) {
      const hostSlug = host.toLowerCase().replace(/\s+/g, "-");
      newBody += `[${host}](/team/${hostSlug})  \n`;
    }
    newBody += "\n";
  }

  // Guests
  if (guests.length > 0) {
    newBody += "**Guest";
    if (guests.length > 1) newBody += "s";
    newBody += ":** ";
    for (let i = 0; i < guests.length; i++) {
      const guest = guests[i];
      // Guests might already have markdown link format
      if (guest.startsWith("[")) {
        newBody += guest;
      } else {
        const guestSlug = guest.toLowerCase().replace(/\s+/g, "-");
        newBody += `[${guest}](/team/${guestSlug})`;
      }
      if (i < guests.length - 1) newBody += ", ";
    }
    newBody += "  \n\n";
  }

  // Add description as summary paragraph
  newBody += description + "\n\n---\n";

  // Extract table_of_contents and convert to Contents section
  const tocStart = fm.indexOf("table_of_contents:");
  if (tocStart !== -1) {
    const tocSection = fm.slice(tocStart);
    const tocItems = [...tocSection.matchAll(/title:\s*"(.*?)"/g)];
    const tocLinks = [...tocSection.matchAll(/link:\s*"(.*?)"/g)];

    if (tocItems.length > 0) {
      newBody += "\n## Contents\n\n";
      for (let i = 0; i < tocItems.length; i++) {
        const itemTitle = tocItems[i][1];
        // We don't have timestamps, so just use anchor links
        newBody += `- [${itemTitle}](${tocLinks[i]?.[1] || "#"})\n`;
      }
      newBody += "\n---\n";
    }
  }

  // Now add the original body content, but strip the old Audio/Transcript sections
  // that will remain as-is (user wants to keep content intact)
  newBody += body;

  console.log(`  VIDEO: ${filename} -> videoUrl: "${embedUrl}"`);
  return newFm + newBody;
}

// Main
const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
console.log(`Found ${files.length} .md files in content/blog/\n`);

let blogCount = 0;
let videoCount = 0;

for (const file of files) {
  const filepath = path.join(BLOG_DIR, file);
  const content = fs.readFileSync(filepath, "utf8");
  const parsed = parseFrontmatter(content);

  if (!parsed) {
    console.log(`SKIP (no frontmatter): ${file}`);
    continue;
  }

  if (isVideoPost(parsed.raw)) {
    const newContent = convertVideoPost(file, content);
    fs.writeFileSync(filepath, newContent, "utf8");
    videoCount++;
  } else {
    const newContent = convertBlogPost(file, content);
    fs.writeFileSync(filepath, newContent, "utf8");
    blogCount++;
  }
}

console.log(`\nDone! Converted ${blogCount} blog posts and ${videoCount} video posts.`);
