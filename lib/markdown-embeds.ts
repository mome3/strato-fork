function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function escapeHtmlAttr(value: string): string {
  return escapeHtml(value)
}

function parseLiquidAttrs(body: string): Record<string, string> {
  const attrs: Record<string, string> = {}
  const re = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g
  let match: RegExpExecArray | null

  while ((match = re.exec(body)) !== null) {
    attrs[match[1]] = match[2] ?? match[3] ?? ""
  }

  return attrs
}

function renderTwitterEmbed(attrs: Record<string, string>): string {
  const url = attrs.url || ""
  if (!url) return ""

  const twitterUrl = url.replace("x.com", "twitter.com")
  const escaped = escapeHtml(twitterUrl)

  return `
<div class="twitter-embed-container" style="margin:1.5rem 0;">
  <blockquote class="twitter-tweet" data-conversation="none">
    <p lang="en" dir="ltr">
      <a href="${escaped}">${escaped}</a>
    </p>
  </blockquote>
</div>`.trim()
}

function renderContentEmbed(attrs: Record<string, string>): string {
  const attrParts: string[] = []

  for (const [rawKey, rawValue] of Object.entries(attrs)) {
    if (!rawValue) continue

    const key =
      rawKey === "thumb_fit" ? "thumbfit" : rawKey === "thumb_zoom" ? "thumbzoom" : rawKey

    attrParts.push(`${key}="${escapeHtmlAttr(rawValue)}"`)
  }

  const attrsMarkup = attrParts.length > 0 ? ` ${attrParts.join(" ")}` : ""
  return `<content-embed-card${attrsMarkup}></content-embed-card>`
}

export function preprocessMarkdownEmbeds(content: string): string {
  return content.replace(/\{%([\s\S]*?)%\}/g, (_match, body: string) => {
    const trimmed = body.trim()

    if (trimmed.startsWith("include twitter-embed.html")) {
      return renderTwitterEmbed(parseLiquidAttrs(trimmed))
    }

    if (trimmed.startsWith("include content-embed.html")) {
      return renderContentEmbed(parseLiquidAttrs(trimmed))
    }

    return ""
  })
}
