export interface Education {
    institution: string;
    location: string;
    degree: string;
    gpa: string;
    startDate: string;
    endDate: string;
    achievements: string[];
}

export const educationData: Education[] = [
    {
        institution: "Chiang Mai University",
        location: "Chiang Mai, Thailand",
        degree: "Bachelor of Engineering (Computer Engineering)",
        gpa: "3.72/4.00",
        startDate: "14/06/2021",
        endDate: "07/05/2025",
        achievements: [
            "Top 1% in following subjects: Discrete Math, Object-Oriented Programming, Algorithms, Logic, Database, Data Structures, Probability & Statistics, and Data Communications.",
            "Achieve certificate of academic excellence for 4 consecutive years (2021-2024) from Chiang Mai University."
        ]
    }
]