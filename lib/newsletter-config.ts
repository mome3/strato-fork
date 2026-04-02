/* ─── Newsletter Configuration ──────────────────────────────────────────
 *  Edit these values to control newsletter subscription behavior.
 *  When `newsletterMode` is true, CTA buttons become email signup forms.
 * ────────────────────────────────────────────────────────────────────── */

export const NEWSLETTER_CONFIG = {
  /**
   * When true, CTA buttons switch to email input mode on click.
   * When false, they behave as regular links.
   */
  newsletterMode: true,

  /**
   * The endpoint URL to POST email subscriptions to.
   * Expected payload: { email: string }
   * This is a placeholder — the backend team will provide the real URL.
   */
  newsletterEndpoint: "https://api.example.com/newsletter/subscribe",

  /**
   * Messages shown to users during the subscription flow.
   */
  messages: {
    success: "You're in! Check your inbox.",
    error: "Something went wrong. Try again?",
    placeholder: "Enter your email",
  },
}

export type NewsletterMode = "cta" | "input" | "loading" | "success" | "error"
