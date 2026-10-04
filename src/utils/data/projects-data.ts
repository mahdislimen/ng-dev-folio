import crefin from '../../assets/images/crefin.png';
import travel from '../../assets/images/travel.png';
import realEstate from '../../assets/images/realEstate.png';
import ayla from '../../assets/images/ayla.png';

interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    code: string;
    demo: string;
    image: string;
    role: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "Quality Defect Management & Analytics Platform",
        description:
            "Web-based platform developed to manage quality defects and monitor production performance. The solution centralizes defect tracking and provides interactive dashboards and analytics to support data-driven quality management. Implemented secure authentication, role-based access control, PPM calculation, KPI monitoring, reporting, and RESTful API integration.",
        tools: [
            "Java",
            "Spring Boot",
            "Angular",
            "MySQL",
            "REST API",
            "Docker",
            "JWT",
            "Git"
        ],
        code: "",
        demo: "",
        image: "assets/images/projects/quality-defect-management.webp",
        role: "Full Stack Java Developer",
    },

    {
        id: 2,
        name: "UniQ Financial ERP",
        description:
            "Enterprise ERP solution designed to manage financial and business operations, including accounting, purchasing, stock, payables, receivables, payroll, and financial reporting. Implemented backend features based on functional requirements, maintained existing modules, fixed production issues, and contributed to application deployment and system integration.",
        tools: [
            "Java",
            "Java EE",
            "Spring",
            "JSP",
            "JavaScript",
            "WildFly",
            "JBoss",
            "SQL Server",
            "Hibernate",
            "Git"
        ],
        code: "",
        demo: "",
        image: "assets/images/projects/uniq-financial.webp",
        role: "Java Technical Consultant",
    }
];