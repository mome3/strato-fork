function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
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

export function preprocessMarkdownEmbeds(content: string): string {
  return content.replace(/\{%([\s\S]*?)%\}/g, (_match, body: string) => {
    const trimmed = body.trim()

    if (trimmed.startsWith("include twitter-embed.html")) {
      return renderTwitterEmbed(parseLiquidAttrs(trimmed))
    }

    return ""
  })
}
