export type Post = {
  slug: string
  title: string
  date: string
  content: Content[]
}

export type Content =
  | {
      type: "paragraph"
      text: string
    }
  | {
      type: "image"
      src: string
      alt: string
    }

export const posts: Post[] = [
  {
    slug: "my-first-post",
    title: "My First Post",
    date: "2024-07-27",
    content: [
      { type: "paragraph", text: "This is the first paragraph of my first blog post. I'm excited to share my thoughts with the world." },
      { type: "image", src: "/headshot2.jpg", alt: "A placeholder image" },
      { type: "paragraph", text: "This is the second paragraph. I can write about technology, linguistics, or anything else that interests me." },
    ],
  },
  {
    slug: "another-post",
    title: "Another Post",
    date: "2024-07-28",
    content: [{ type: "paragraph", text: "Here is another post. It's about something different." }, { type: "paragraph", text: "I can add as many paragraphs as I want." }],
  },
] 