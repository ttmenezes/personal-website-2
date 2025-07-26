import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24">
          {/* Left Column - Profile */}
          <div className="md:w-1/3 lg:w-1/4 mb-12 md:mb-0">
            <div className="sticky top-12">
              <div className="flex flex-col items-start gap-6">
                <div className="relative w-24 h-24 rounded-full  shadow-lg overflow-hidden">
                  <Image
                    src="/headshot2.jpg?height=96&width=96"
                    alt="Trivan Menezes"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">Trivan Menezes</h1>
                  <p className="text-muted-foreground">Princeton CS | Microsoft Azure AI</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <Link href="https://github.com/ttmenezes" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github size={18} />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/trivan-menezes" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin size={18} />
                    </Button>
                  </Link>
                  <Link href="mailto:trivnamenezes+1@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail size={18} />
                    </Button>
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3 lg:w-3/4">
            {/* Bio Section */}
            <section className="mb-16">
              <p className="text-xl italic font-semibold mb-6">Building AI tools for search, user experience, and language.</p>
              <p className="mb-6">
                I'm currently interested in building comprehensive search and retrieval systems, creating new interfaces
                for the next generation of AI applications, and tailoring modern AI models to low-resource languages.
              </p>

              <p className="mb-6">
                My work at Micrsoft Azure AI focuses on building a platform for enterprise search and
                retrieval-augmented generation.
              </p>
              <p className="mb-6">My past work involves Computational Linguistics and Knot Theory.</p>
              {/* <div className="flex flex-wrap gap-4 mt-4">
                <Link href="/writing">
                  <Button variant="outline" className="gap-2">
                    Writing
                  </Button>
                </Link>
              </div> */}
            </section>

            {/* Moments Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Moments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MomentCard
                  title="Launched collab with Vercel"
                  date="2025"
                  description="Created the official Azure AI x Vercel AI SDK RAG chat app template. Open-source."
                  link="https://vercel.com/templates/next.js/azure-ai-rag-chatbot"
                />
                <MomentCard
                  title="Placed at X Developer Challenge"
                  date="2024"
                  description="Came in 3rd place at first-ever X hackathon. Created VLM-based natural-language feed filter. Presented to Elon Musk."
                  link="https://x.com/santiagomedr/status/1782209463639998569"
                />
                <MomentCard
                  title="Published Math Research"
                  date="2021"
                  description="My knot theory research was published in the Journal of Knot Theory and Its Ramifications."
                  link="https://www.worldscientific.com/doi/pdf/10.1142/S0218216521500632"
                />
                <MomentCard
                  title="Princeton University"
                  date="2019-2023"
                  description="Studied Computer Science at Princeton University."
                />
                <MomentCard
                  title="First Microsoft Internship"
                  date="2021"
                  description="Started my journey at Microsoft as an Explore Intern, working on the Azure Cloud Supply Chain."
                />
                <MomentCard
                  title="Joined Azure AI"
                  date="2023"
                  description="Began my full-time career at Microsoft working on Azure AI services."
                />
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title="Fine-Tuning SLMs for Low-Resource Indonesian Languages"
                  technologies={["python", "trl"]}
                  description="Explored fine-tuning techniques on open-weight models for Javanese (80M+ speakers) translation. Tuned a 4B model to match performance of GPT-4o and Gemini 2.0 Flash, showing a resource-efficient path for adapting models to underserved linguistic communities."
                  link="https://drive.google.com/file/d/1_i8voMnRzCtHlRkReQAk1SCcgBuOx7sr/view?usp=drive_link"
                  github="https://github.com/ttmenezes/indo-mt-tuning"
                />
                <ProjectCard
                  title="NY Signal"
                  technologies={["next.js", "azure"]}
                  description="Built a live application to generate daily news updates for New Yorkers, tailored to their neighborhood and topic preferences. Users can share their digest with community members."
                  link="https://nysignal.com"
                />
                <ProjectCard
                  title="Portuguese Etymology Visualizer"
                  technologies={["python", "flask", "html/css/js"]}
                  description="Intrigued by my study of linguistics and the Portuguese language, I sought to explore the different influences on Portuguese and show how words from different ancestor languages evolved to their present form."
                  link="http://etym.info"
                />
                <ProjectCard
                  title="Translating Indigenous Indonesian Languages"
                  technologies={["pytorch", "python"]}
                  description="Indonesia is both one of the most linguistically diverse and most populated regions of the world. I created a pipeline to process datasets for indigenous Indonesian languages and create a translation model in PyTorch using a transformer."
                />
                <ProjectCard
                  title="National Team Mapper"
                  technologies={["python", "flask", "html/css/js"]}
                  description="Built a Python script which scrapes roster data off of Wikipedia and records the birthplaces of players on every national team, displaying this data on an interactive map."
                  link="http://198.58.127.194/FR?"
                  github="https://github.com/ttmenezes/National-Team-Mapper"
                />
                <ProjectCard
                  title="TigerGig"
                  technologies={["python", "flask", "html/css/js"]}
                  description="Built TigerGig, a creator marketplace for students at Princeton University to find talent to hire. Integrated OAuth security, designed an aesthetic UI, and wrote in-depth technical and user guides."
                />
                <ProjectCard
                  title="music.me"
                  technologies={["html/css/js", "mathematica"]}
                  description="Worked with three friends to build a web app which curates music playlist sequences depending on the user's schedule, using Google Calendar, Wolfram Mathematica for classification, and the Spotify API."
                  github="https://github.com/ATLi2001/PennApps-2020"
                />
                <ProjectCard
                  title="Knot Theory Research"
                  technologies={["mathematica"]}
                  description="Worked with Dr. Claus Ernst at Western Kentucky University on a project in the theoretical math field of knot theory, resulting in a published research paper."
                  link="https://www.worldscientific.com/doi/abs/10.1142/S0218216521500632?journalCode=jktr"
                />
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-muted-foreground min-w-[90px] italic">{/* Year */}Present</span>
                    <span className="font-semibold flex-1 text-left">{/* Role */}Software Engineer 2</span>
                    <span className="text-muted-foreground text-right min-w-[100px]">{/* Company */}Microsoft Azure AI Search</span>
                  </div>
                </div>
                <div className="border-b border-border pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-muted-foreground min-w-[90px]">{/* Year */}2023</span>
                    <span className="font-semibold flex-1 text-left">{/* Role */}Software Engineer</span>
                    <span className="text-muted-foreground text-right min-w-[100px]">{/* Company */}Microsoft Azure AI Language</span>
                  </div>
                </div>
                <div className="border-b border-border pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-muted-foreground min-w-[90px]">{/* Year */}2022</span>
                    <span className="font-semibold flex-1 text-left">{/* Role */}Software Engineer Intern</span>
                    <span className="text-muted-foreground text-right min-w-[100px]">{/* Company */}Microsoft Azure AI Vision</span>
                  </div>
                </div>
                <div className="border-b border-border pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-muted-foreground min-w-[90px]">{/* Year */}2021</span>
                    <span className="font-semibold flex-1 text-left">{/* Role */}Explore Intern</span>
                    <span className="text-muted-foreground text-right min-w-[100px]">{/* Company */}Microsoft</span>
                  </div>
                </div>
                <div className="border-b border-border pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-muted-foreground min-w-[90px]">{/* Year */}2019</span>
                    <span className="font-semibold flex-1 text-left">{/* Role */}Software Developer Intern</span>
                    <span className="text-muted-foreground text-right min-w-[100px]">{/* Company */}Interapt</span>
                  </div>
                </div>
                <div className="border-b border-border pb-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-muted-foreground min-w-[90px]">{/* Year */}2018</span>
                    <span className="font-semibold flex-1 text-left">{/* Role */}Undergraduate Researcher (Knot Theory)</span>
                    <span className="text-muted-foreground text-right min-w-[100px]">{/* Company */}Western Kentucky University</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Trivan Menezes. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}

type ProjectCardProps = {
  title: string
  technologies: string[]
  description: string
  link?: string
  github?: string
}

function ProjectCard({ title, technologies, description, link, github }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground flex-grow">{description}</p>
        {(link || github) && (
          <div className="flex gap-3 mt-4">
            {link && (
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink size={14} />
                  Visit
                </Button>
              </Link>
            )}
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1">
                  <Github size={14} />
                  Code
                </Button>
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

type MomentCardProps = {
  title: string
  date: string
  description: string
  link?: string
}

function MomentCard({ title, date, description, link }: MomentCardProps) {
  return (
    <Card className="">
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{date}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        {link && (
          <div className="mt-3">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1 cursor-pointer">
                <ExternalLink size={14} />
                View
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
