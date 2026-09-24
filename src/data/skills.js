import { Code2, Database, LineChart, BrainCircuit } from 'lucide-react';

export const skillCategories = [
    {
        id: 'backend',
        category: 'Programming & Backend',
        description: 'Robust server-side engineering, asynchronous FastAPI endpoints, document parsing algorithms, and scalable microservices.',
        icon: Code2,
        accent: 'violet',
        borderGlow: 'hover:border-violet-400/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]',
        badgeBg: 'bg-violet-500/10 border-violet-400/25 text-violet-300',
        primarySkills: ['Python', 'FastAPI', 'REST APIs'],
        skills: ['Python', 'FastAPI', 'REST APIs', 'AsyncIO', 'Pydantic', 'OOP Architecture', 'Exception Handling', 'Postman']
    },
    {
        id: 'databases',
        category: 'Databases & Querying',
        description: 'Relational schema design, advanced analytical queries, CTEs, window functions, and MongoDB document persistence.',
        icon: Database,
        accent: 'cyan',
        borderGlow: 'hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
        badgeBg: 'bg-cyan-500/10 border-cyan-400/25 text-cyan-300',
        primarySkills: ['SQL', 'MongoDB', 'Window Functions'],
        skills: ['SQL', 'MySQL', 'MongoDB Atlas', 'CTEs', 'Window Functions', 'Data Modeling', 'Query Optimization']
    },
    {
        id: 'bi',
        category: 'Analytics & Business Intelligence',
        description: 'Translating noisy records into executive KPI dashboards, revenue velocity reports, and DAX calculations.',
        icon: LineChart,
        accent: 'amber',
        borderGlow: 'hover:border-amber-400/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
        badgeBg: 'bg-amber-500/10 border-amber-400/25 text-amber-300',
        primarySkills: ['Power BI', 'DAX Measures', 'EDA'],
        skills: ['Power BI', 'DAX Measures', 'Excel (Power Query)', 'Exploratory Data Analysis (EDA)', 'Star Schema Modeling']
    },
    {
        id: 'ml',
        category: 'Data Science & Machine Learning',
        description: 'Supervised classification, predictive risk assessment, diagnostic evaluation metrics, and exploratory profiling.',
        icon: BrainCircuit,
        accent: 'rose',
        borderGlow: 'hover:border-rose-400/50 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
        badgeBg: 'bg-rose-500/10 border-rose-400/25 text-rose-300',
        primarySkills: ['Scikit-learn', 'Pandas & NumPy', 'Random Forest'],
        skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'Model Diagnostics', 'Precision / Recall Tuning']
    }
];

// Role-specific tailored pipelines
export const trackPipelines = {
    'python-developer': [
        { step: '01', title: 'Scrape / Ingest', tools: 'Automated Scripts & APIs' },
        { step: '02', title: 'Validate / Process', tools: 'Pydantic & AsyncIO' },
        { step: '03', title: 'Persist / Store', tools: 'MongoDB Atlas & SQL' },
        { step: '04', title: 'Serve / Automate', tools: 'FastAPI Microservices' }
    ],
    'data-analyst': [
        { step: '01', title: 'Source & Ingest', tools: 'SQL Queries & CSV Datasets' },
        { step: '02', title: 'Clean & Transform', tools: 'Python (Pandas) & Power Query' },
        { step: '03', title: 'Model & Analyze', tools: 'Relational Joins & Aggregations' },
        { step: '04', title: 'Visualize & Report', tools: 'Power BI Dashboards & KPIs' }
    ],
    'bi-developer': [
        { step: '01', title: 'Connect Data', tools: 'SQL Server & Data Sources' },
        { step: '02', title: 'Star Schema', tools: 'Fact & Dimension Modeling' },
        { step: '03', title: 'DAX Metrics', tools: 'Calculated Measures & Tables' },
        { step: '04', title: 'Executive BI', tools: 'Interactive Power BI Reports' }
    ],
    'data-science': [
        { step: '01', title: 'Exploration (EDA)', tools: 'Pandas, NumPy, Seaborn' },
        { step: '02', title: 'Feature Engineering', tools: 'Data Imputation & Scaling' },
        { step: '03', title: 'Model Training', tools: 'Scikit-learn & Random Forest' },
        { step: '04', title: 'Evaluation & Deploy', tools: 'Precision Metrics & FastAPI' }
    ]
};

// Universal fallback export for legacy compatibility
export const pipelineStages = trackPipelines['python-developer'];

export default skillCategories;