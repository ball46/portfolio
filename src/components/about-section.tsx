import { profileData } from "@/data/profile"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-secondary/50 border-[hsl(var(--border))]">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-center">{profileData.phone}</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50 border-[hsl(var(--border))]">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-center">{profileData.email}</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50 border-[hsl(var(--border))]">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-center">{profileData.location}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="bg-secondary/50 border-[hsl(var(--border))]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{profileData.statement}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

