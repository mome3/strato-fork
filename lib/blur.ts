import "server-only"
import fs from "fs"
import path from "path"
import { getPlaiceholder } from "plaiceholder"

const cache = new Map<string, string>()

/**
 * Generate a tiny base64 blur placeholder for a local public/ image.
 * Returns undefined if the file doesn't exist or processing fails.
 */
export async function getBlurDataURL(
  src: string
): Promise<string | undefined> {
  if (!src) return undefined

  const cached = cache.get(src)
  if (cached) return cached

  try {
    const filePath = path.join(process.cwd(), "public", src)
    if (!fs.existsSync(filePath)) return undefined

    const buffer = fs.readFileSync(filePath)
    const { base64 } = await getPlaiceholder(buffer, { size: 10 })

    cache.set(src, base64)
    return base64
  } catch {
    return undefined
  }
}
