"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import { profileData } from "@/data/profile"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ["Backend Developer", "TypeScript Expert", "Golang Developer", "Java Developer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(300)

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex]

      if (!isDeleting) {
        setTypedText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex >= currentRole.length) {
          setIsDeleting(true)
          setTypingSpeed(1000) // Pause before deleting
        }
      } else {
        setTypedText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex <= 1) {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
          setTypingSpeed(150)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed])

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary to-background z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I&#39;m <span className="text-primary">{profileData.name.split(" ")[0]}</span>
            </h1>
            <div className="h-12">
              <h2 className="text-2xl md:text-3xl font-semibold">
                <span className="text-muted-foreground">I&#39;m a </span>
                <span className="text-primary">{typedText}</span>
                <span className="border-r-4 border-primary animate-blink"></span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl">{profileData.statement.split(".")[0] + "."}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex space-x-4 pt-4">
              <Link
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={`mailto:${profileData.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button bg-red-500"></div>
                <div className="terminal-button bg-yellow-500"></div>
                <div className="terminal-button bg-green-500"></div>
                <div className="ml-4 text-xs text-muted-foreground">backend-developer.ts</div>
              </div>
              <div className="terminal-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">interface</span> <span className="function">Developer</span> {"{"}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    {" "}
                    name: <span className="string">&#34;Charnchol Panusupanirun&#34;</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    {" "}
                    role: <span className="string">&#34;Backend Developer&#34;</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    {" "}
                    languages: <span className="string">string</span>[];
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    {" "}
                    expertise: <span className="string">string</span>[];
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text">{"}"}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code-text"></span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="code-text">
                    <span className="keyword">const</span> developer: Developer = {"{"}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">9</span>
                  <span className="code-text">
                    {" "}
                    name: <span className="string">&#34;Charnchol Panusupanirun&#34;</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">10</span>
                  <span className="code-text">
                    {" "}
                    role: <span className="string">&#34;Backend Developer&#34;</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">11</span>
                  <span className="code-text">
                    {" "}
                    languages: [<span className="string">&#34;TypeScript&#34;</span>, <span className="string">&#34;Golang&#34;</span>,{" "}
                    <span className="string">&#34;Java&#34;</span>],
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">12</span>
                  <span className="code-text">
                    {" "}
                    expertise: [<span className="string">&#34;Backend Development&#34;</span>,{" "}
                    <span className="string">&#34;API Design&#34;</span>, <span className="string">&#34;Database Design&#34;</span>]
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">13</span>
                  <span className="code-text">{"};"}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">14</span>
                  <span className="code-text"></span>
                </div>
                <div className="code-line">
                  <span className="line-number">15</span>
                  <span className="code-text">
                    <span className="keyword">export default</span> developer;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  )
}

