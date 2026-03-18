import fs from "fs";
import path from "path";

console.log("cwd:", process.cwd());
console.log("__dirname would be:", path.dirname(new URL(import.meta.url).pathname));

// Try to find content/blog from cwd
const fromCwd = path.join(process.cwd(), "content/blog");
console.log("fromCwd:", fromCwd, "exists:", fs.existsSync(fromCwd));

// Try relative to script
const fromScript = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "content/blog");
console.log("fromScript:", fromScript, "exists:", fs.existsSync(fromScript));

// List cwd contents
console.log("\ncwd contents:", fs.readdirSync(process.cwd()).join(", "));
