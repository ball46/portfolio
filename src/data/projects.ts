interface Project {
    name: string;
    period?: string;
    position: string;
    technologies: string[];
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface TopicProject {
    topic: string;
    projects: Project[];
}

const projects: Project[] = [
    {
        name: "Screetner",
        period: "Senior (2024)",
        position: "Backend Developer",
        technologies: ["TypeScript", "Flutter", "Python", "Golang", "PostgreSQL", "Redis", "MongoDB"],
        description: "Screetner (Street Scanner), my senior project, is an end-to-end system for local government asset scanning. It features a custom mobile app for video recording during drives, advanced image processing for data analysis, and an Azure-based auto-scaling unit to optimize resource usage and costs. Processed data is presented on a web platform, streamlining asset management and maintenance efficiently.",
        githubUrl: "https://github.com/screetner",
    },
    {
        name: "Manao Meals",
        period: "Senior (2024)",
        position: "Backend Developer",
        technologies: ["TypeScript", "React", "Flutter", "Firestore"],
        description: "Manao Meals is an internal application developed to streamline lunch ordering for Manao Software Co., Ltd's employees. The application allows employees to conveniently browse menus from participating restaurants and place advance orders through a user-friendly interface. By simplifying the lunch selection process, Manao Meals saves time and enhances productivity for the company’s workforce.",
    },
    {
        name: "BOTMAPS",
        period: "Junior (2023)",
        position: "Backend Developer",
        technologies: ["Golang", "React", "MySQL"],
        description: "This project is a web application to visualize the floor plan of the computer engineering department at Chiang Mai University. Before having this, everyone had to see everything on TeamUp’s website, which was hard to understand, so this project solved that problem by showing the whole data on that website in floor plan visualization along with used room and course information.",
        githubUrl: "https://github.com/orgs/SE-Project-BOTMAPS/repositories",
    },
    {
        name: "Computer Architecture Project - Assembler and Simulator Development",
        period: "Junior (2023)",
        position: "Developer",
        technologies: ["Java"],
        description: "This project involved developing an assembler in Java to generate machine language code and a corresponding  simulator to execute the generated code. The project required designing and implementing our own assembly  language, demonstrating a comprehensive understanding of computer architecture concepts.",
        githubUrl: "https://github.com/ProjectWithFriend/Assembler",
    },
    {
        name: "UPBEAT",
        period: "Sophomore (2022)",
        position: "Backend Developer",
        technologies: ["Java"],
        description: "UPBEAT is a turn-based strategy game where two or more players compete to claim an entire territory represented as an m×n hexagonal grid, customizable via a configuration file. Players write scripts to dictate the actions of their characters, enabling automated gameplay based on their strategies. Success relies on crafting efficient scripts to outmaneuver opponents and achieve territorial dominance.",
        githubUrl: "https://github.com/ball46/Project_UPBEAT",
    }
]

export const projectData: TopicProject = {
    topic: "Projects",
    projects: projects,
}

