export interface ContactInfo {
  title: string
  description: string
  submitMessage: string
  contactInfoTitle: string
  sendMessageTitle: string
  formFields: {
    name: {
      label: string
      placeholder: string
    }
    email: {
      label: string
      placeholder: string
    }
    subject: {
      label: string
      placeholder: string
    }
    message: {
      label: string
      placeholder: string
    }
    submitButton: string
    submittingButton: string
  }
}

export const contactData: ContactInfo = {
  title: "Contact Me",
  description:
    "Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.",
  submitMessage: "Thank you for your message! I'll get back to you soon.",
  contactInfoTitle: "Contact Information",
  sendMessageTitle: "Send Me a Message",
  formFields: {
    name: {
      label: "Name",
      placeholder: "Your name",
    },
    email: {
      label: "Email",
      placeholder: "Your email",
    },
    subject: {
      label: "Subject",
      placeholder: "Subject",
    },
    message: {
      label: "Message",
      placeholder: "Your message",
    },
    submitButton: "Send Message",
    submittingButton: "Sending...",
  },
}

