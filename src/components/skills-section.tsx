import { topicSkills } from "@/data/skill"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{topicSkills.topic}</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicSkills.skills.map((skillCategory, index) => (
            <Card key={index} className="bg-secondary/50 border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{skillCategory.type}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-background rounded-full text-sm border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

