// Turkish to English Translation

const about = {
    title: "Hello, I'm Ensar Makas.",
    jobTitle:"Software Engineer",
    content: `
    I am passionate about the internet and internet technologies, continuously developing my skills in this field.
    Throughout my university education, I took part in various activities and actively sought professional experience.
    My goal is to develop performance-oriented solutions in the field of internet technologies, considering the industry's needs and ensuring top-notch user and developer experiences.
    `
};

const jobs = [
    {
        jobTitle: "Associate Software Developer",
        company: "Veripark",
        description:"I am developing CRM solutions based on Microsoft Dynamics products for enterprise companies within Veripark.",
        startDate:"March-2024",
        endDate:"Present",
        learnedTechs: ["C#","Typescript",".NET","Azure","Microsoft Dynamics 365"]
    },
    {
        jobTitle: "Intern",
        company: "Koç Sistem",
        description: "During my two months here, I had the opportunity to work with a professional team. I managed the project following the Agile-Scrum principles while developing a shopping API application.",
        startDate: "November 2022",
        endDate: "January 2023",
        learnedTechs: ["PHP", "Javascript", "HTML", "CSS", "Wordpress", ".NET", ".NET Core"]
    },
    {
        jobTitle: "Intern",
        company: "Turkish Open Source Platform",
        description: "During one month here, I had the opportunity to examine the software named LabelStudio.",
        startDate: "July 2022",
        endDate: "August 2022",
        learnedTechs: ["LabelStudio", "DJango", "Python"]
    },
    {
        jobTitle: "Volunteer Intern",
        company: "Kando Informatics",
        description: "Here, I gained my initial experiences in web applications. I learned languages such as PHP, MySQL, Javascript, HTML, CSS.",
        startDate: "August 2020",
        endDate: "May 2022",
        learnedTechs: [".NET Core"]
    }
];

const volunteerWorks = [
    {
        title: "Chairman of the Administrative Board, IEEE Beykent University Computer Society",
        description: "During my term as the chairman of the administrative board, we organized competitions and seminars.",
        startDate: "August 2021",
        endDate: "July 2022"
    },
    {
        title: "Active Member, IEEE Beykent University Student Branch",
        description: "During my active membership, I participated in various committees and projects.",
        startDate: "August 2020",
        endDate: "July 2021"
    }
];

const educations = [
    {
        university: "Ecole 42 Turkey",
        branch: "",
        startDate: "January 2022",
        endDate: "Ongoing",
        description: "Ecole 42 is an international software school. We develop projects by taking on different tasks at all levels based on peer learning."
    },
    {
        university: "Beykent University",
        branch: "Computer Engineering",
        startDate: "August 2019",
        endDate: "Ongoing",
        description: "All my courses are completed, only my internship is pending."
    },
    {
        university: "Captain Ahmet Erdogan Anatolian Imam Hatip High School",
        branch: "",
        startDate: "October 2014",
        endDate: "June 2019",
        description: ""
    }
];

const projects = [
    {
        name: "DepIn",
        description: "DepIn is a dependency injection tool designed for the Java language.",
        github_link: "https://github.com/rasnesakam/DepIn",
        techStack: ["Java", "Gradle", "JUnit"]
    },
    {
        name: "Shop API",
        description: "A product management service that will run background systems for e-commerce sites.",
        github_link: "https://github.com/rasnesakam/shop-api",
        techStack: ["C#", ".NET7", "Entity Framework", "Fluent API", "Docker"]
    },
    {
        name: "emakas-users",
        description: "A service created for user and authorization processes that I will process in my microservices. It contains user information and authorization processes.",
        github_link: "https://github.com/rasnesakam/emakas-users",
        techStack: ["Java", "Spring Boot", "Docker"]
    },
    {
        name: "RESTful API Gateway",
        description: "A gateway that will provide access to my microservices from a single location.",
        github_link: "https://github.com/rasnesakam/api-gateway",
        techStack: ["Typescript", "Node Js", "Express Js"]
    },
    {
        name: "Blog API",
        description: "Designed to manage backend processes for blog and news sites.",
        github_link: "https://github.com/rasnesakam/blog-api",
        techStack: ["Typescript", "Node Js", "Express Js", "Prisma Js"]
    },
    {
        name: "Simple Dashboard",
        description: "A common administration panel that can be used for my services. Users will access and add new content to their services from here.",
        github_link: "https://github.com/rasnesakam/simple-dashboard",
        techStack: ["Next Js"]
    },
    {
        name: "Battery World",
        description: "An example e-commerce application developed. Also, it is being developed for my friend.",
        github_link: "https://github.com/rasnesakam/bataryadunyasi",
        techStack: ["Next Js", "Docker"]
    },
    {
        name: "Company Management System",
        description: "A system based on MVC that focuses on task management for customer companies during my first job experiences.",
        github_link: "https://github.com/rasnesakam/CompanyManagementSystem",
        techStack: ["C#", ".NET5"]
    }
];

const links = {
    linkedIn: "https://www.linkedin.com/in/ensar-makas-a16b69199/",
    github: "https://github.com/rasnesakam",
    twitter: "https://twitter.com/ensar_makas",
    gmail: "ensar.makas@gmail.com",
    instagram: "https://www.instagram.com/ensar.makas/",
    medium: "https://medium.com/@emakas",
    others: []
};

export { about, jobs, volunteerWorks, educations, projects, links };
