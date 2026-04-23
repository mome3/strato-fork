import Link from "next/link"

export default function VideoPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/blog" />
      <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 text-center">
        <p>
          Redirecting to{" "}
          <Link href="/blog" className="text-[#243486] underline">
            /blog
          </Link>
          .
        </p>
      </main>
    </>
  )
}
