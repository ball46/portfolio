interface Experience {
    company: string;
    position: string;
    technologies: string[];
    academicPeriod?: string;
    duration: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export interface TopicExperience {
    topic: string;
    experiences: Experience[];
}

const workExpData: Experience[] = [
    {
        company: "Registration Office Chiang Mai University",
        position: "Backend developer",
        technologies: ["TypeScript", "NestJS", "MySQL"],
        academicPeriod: "Senior (2024)",
        duration: "5 Months",
        startDate: "2024-01",
        endDate: "2024-05",
        responsibilities: [
            "Exploring solutions for storing tree-structured data with versioning (similar to Git versioning) in a relational database.",
            "Providing backend development support to ensure efficient and effective project outcomes."
        ]
    },
    {
        company: "Manao Software Co., Ltd.",
        position: "Internship as Backend developer",
        technologies: ["Node.js", "Express.js", "Firestore", "React"],
        academicPeriod: "Senior (2024)",
        duration: "5 Months",
        startDate: "2024-05",
        endDate: "2024-10",
        responsibilities: [
            "Enhanced skills like time management, problem-solving, and teamwork.",
            "Supported team in developing and enhancing the backend system.",
            "Improved and developed backend features across 81% of the existing system functionalities in the Manao Meals project, significantly enhancing overall system performance and user experience."
        ]
    },
    {
        company: "Banana Software Co., Ltd.",
        position: "Internship & Part time as Backend Developer",
        technologies: ["PHP", "Slim", "MySQL", "JavaScript"],
        academicPeriod: "Junior (2023)",
        duration: "4 Months",
        startDate: "2023-04",
        endDate: "2023-08",
        responsibilities: [
            "Interned at Banana Software Co., Ltd., with a primary focus on database-related tasks.",
            "Worked on a key project involving Gold data collection and visualization.",
            "Contributed to enhancing the company’s attendance system."
        ]
    },
    {
        company: "Chiang Mai University’s Faculty of Engineering",
        position: "Teaching Assistant",
        technologies: [],
        academicPeriod: "Sophomore to Senior (2022-2025)",
        duration: "2 Years",
        startDate: "2022-11",
        endDate: "2025-03",
        responsibilities: [
            "261112 Game Appreciation: Assisted the professor in evaluating students’ homework submissions and providing constructive feedback.",
            "261216 Discrete Mathematics: Developed lesson plans, facilitated interactive learning sessions, and assessed students' assignments to enhance their understanding of key concepts.",
            "261200 Object-Oriented Programming: Conducted discussion sessions and facilitated hands-on activities to help students effectively grasp and apply core programming principles.",
            "261306 Probability and Statistics: Collaborated with the professor to review and evaluate students’ homework submissions, ensuring accurate feedback and comprehension.",
            "IKKQ Camp: Taught participants how to use GoGo boards and guided them in applying the technology to practical projects."
        ]
    }
]

export const workExp: TopicExperience = {
    topic: "Work Experience",
    experiences: workExpData
}