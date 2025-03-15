import { workExp } from "@/data/work_exp"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{workExp.topic}</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-8">
            {workExp.experiences.map((experience, index) => (
                <Card key={index} className="bg-secondary/50 border-border overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="bg-secondary p-6 md:border-r border-border h-full flex flex-col gap-4">
                        <h3 className="text-xl font-semibold mb-2">{experience.company}</h3>
                        <p className="text-primary font-medium mb-4">{experience.position}</p>

                        <div className="flex items-center text-muted-foreground mb-2">
                          <CalendarDays className="h-4 w-4 mr-2" />
                          <span>
                        {experience.startDate} - {experience.endDate}
                      </span>
                        </div>

                        <div className="flex items-center text-muted-foreground">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span>{experience.duration}</span>
                        </div>

                        {experience.academicPeriod && (
                            <Badge variant="outline" className="mt-auto self-start">
                              {experience.academicPeriod}
                            </Badge>
                        )}
                      </div>

                      <div className="p-6 md:col-span-2">
                        <div className="mb-4">
                          <h4 className="text-lg font-medium mb-2">Responsibilities</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {experience.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>

                        {experience.technologies.length > 0 && (
                            <div>
                              <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-background rounded-full text-sm border border-border"
                                    >
                              {tech}
                            </span>
                                ))}
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

