import { posts, Post, Content } from "@/lib/posts"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

function PostContent({ content }: { content: Content[] }) {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        if (item.type === "paragraph") {
          return (
            <p key={index} className="text-lg leading-relaxed">
              {item.text}
            </p>
          )
        }
        if (item.type === "image") {
          return (
            <div key={index} className="relative w-full h-96 rounded-lg overflow-hidden my-8">
              <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <article>
            <header className="mb-12 text-center">
              <h1 className="text-5xl font-extrabold mb-4">{post.title}</h1>
              <p className="text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </header>
            <PostContent content={post.content} />
          </article>
        </div>
      </div>
    </main>
  )
} 