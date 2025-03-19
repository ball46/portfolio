"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { profileData } from "@/data/profile"
import { contactData } from "@/data/contact"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, you would send the form data to your backend
      // For example, using a server action to email charnchol.pa@gmail.com
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", formData)
      console.log("Sending email to: charnchol.pa@gmail.com")

      setSubmitMessage(contactData.submitMessage)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)

      // Clear the message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("")
      }, 5000)
    }
  }

  return (
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{contactData.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{contactData.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-secondary/50 border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{contactData.contactInfoTitle}</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Phone</h4>
                      <p className="text-muted-foreground">{profileData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground">{profileData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">GitHub</h4>
                      <Link
                          href={profileData.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {profileData.githubUrl.replace("https://", "")}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">LinkedIn</h4>
                      <Link
                          href={profileData.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {profileData.linkedinUrl.replace("https://www.", "")}
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{contactData.sendMessageTitle}</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-1">
                      {contactData.formFields.name.label}
                    </label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={contactData.formFields.name.placeholder}
                        required
                        className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium block mb-1">
                      {contactData.formFields.email.label}
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={contactData.formFields.email.placeholder}
                        required
                        className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium block mb-1">
                      {contactData.formFields.subject.label}
                    </label>
                    <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={contactData.formFields.subject.placeholder}
                        required
                        className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium block mb-1">
                      {contactData.formFields.message.label}
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={contactData.formFields.message.placeholder}
                        required
                        className="min-h-[120px] bg-background"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? contactData.formFields.submittingButton : contactData.formFields.submitButton}
                  </Button>

                  {submitMessage && <p className="text-green-500 text-center">{submitMessage}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

