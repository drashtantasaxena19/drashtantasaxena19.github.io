import { Database, Cog, BarChart3, LineChart, Code2, Sparkles } from 'lucide-react';

export const freelanceServices = [
    {
        id: 'data-solutions',
        label: 'Data Solutions',
        shortTitle: 'Data Solutions',
        description:
            'End-to-end data analysis, reporting schemas, data cleansing, and actionable exploratory insight discovery.',
        icon: Database,
        deliverables: [
            'ETL & pipeline automation',
            'SQL data modeling & query tuning',
            'Comprehensive EDA & risk profiling reports'
        ]
    },
    {
        id: 'custom-automation',
        label: 'Custom Automation',
        shortTitle: 'Custom Automation',
        description:
            'Automate manual workflows, build asynchronous FastAPI endpoints, document parsers, and custom scrapers.',
        icon: Cog,
        deliverables: [
            'FastAPI microservices & REST integrations',
            'Automated resume/document screening bots',
            'Scheduled data sync workflows'
        ]
    },
    {
        id: 'dashboards-bi',
        label: 'Dashboards & BI',
        shortTitle: 'Dashboards & BI',
        description:
            'Interactive executive dashboards and Power BI solutions that transform metrics into real business clarity.',
        icon: BarChart3,
        deliverables: [
            'Custom DAX measures & KPI tracking',
            'Multi-page executive overview reports',
            'Cross-filtered operational dashboards'
        ]
    }
];

export const services = freelanceServices;
export default freelanceServices;