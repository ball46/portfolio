import { educationData } from "@/data/education"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, GraduationCap, MapPin } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card key={index} className="bg-secondary/50 border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">{education.institution}</h3>
                    <p className="text-primary font-medium">{education.degree}</p>

                    <div className="flex items-center text-muted-foreground mt-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{education.location}</span>
                    </div>
                  </div>

                  <div className="md:text-right">
                    <div className="flex items-center text-muted-foreground mb-2 md:justify-end">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span>
                        {education.startDate} - {education.endDate}
                      </span>
                    </div>

                    <div className="flex items-center text-muted-foreground md:justify-end">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>GPA: {education.gpa}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Achievements</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {education.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

