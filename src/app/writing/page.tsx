import Link from "next/link"
import { posts } from "@/lib/posts"

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold">Writing</h1>
          </header>
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/writing/${post.slug}`} className="block group">
                <article>
                  <h2 className="text-3xl font-bold group-hover:underline">{post.title}</h2>
                  <p className="text-muted-foreground mt-2">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 