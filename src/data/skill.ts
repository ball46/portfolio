interface Skill {
    type: string;
    skills: string[];
}

export interface TopicSkill {
    topic: string;
    skills: Skill[];
}

const technicalSkills: Skill[] = [
    {
        type: "Programming Languages",
        skills: ["TypeScript", "Java", "Golang", "Python", "Haskell", "SQL", "C#", "C++", "JavaScript", "PHP"]
    },
    {
        type: "Web Technologies",
        skills: ["HTML", "CSS", "Node.js", "Express.js", "React"]
    },
    {
        type: "Database",
        skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firestore", "Redis"]
    },
    {
        type: "Developer Tools",
        skills: ["Git", "Docker", "Postman", "Swagger", "phpMyAdmin"]
    },
    {
        type: "Frameworks",
        skills: ["ElysiaJs", "NestJS", "Next.js", "Vue.js", "Slim", "Laravel"]
    }
]

export const topicSkills: TopicSkill = {
    topic: "Technical Skills",
    skills: technicalSkills
}