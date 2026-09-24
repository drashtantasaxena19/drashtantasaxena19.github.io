export const roleResumes = {
    'python-developer': {
        title: 'Python & Backend Engineer Resume',
        filename: 'Drashtanta_Saxena_Python_Developer_Resume.pdf',
        url: '/assets/resumes/Drashtanta_Saxena_PD_Resume.pdf'
    },
    'data-analyst': {
        title: 'Data Analyst & BI Resume',
        filename: 'Drashtanta_Saxena_Data_Analyst_Resume.pdf',
        url: '/assets/resumes/Drashtanta_Saxena_DA_Resume.pdf'
    },
    'bi-developer': {
        title: 'BI Developer & Power BI Resume',
        filename: 'Drashtanta_Saxena_BI_Developer_Resume.pdf',
        url: '/assets/resumes/Drashtanta_Saxena_BI_Resume.pdf'
    },
    'data-science': {
        title: 'Data Science & ML Engineer Resume',
        filename: 'Drashtanta_Saxena_Data_Science_Resume.pdf',
        url: '/assets/resumes/Drashtanta_Saxena_DS_Resume.pdf'
    }
};

export const allResumesList = [
    { id: 'python-developer', ...roleResumes['python-developer'], icon: 'Code2', color: 'violet' },
    { id: 'data-analyst', ...roleResumes['data-analyst'], icon: 'BarChart3', color: 'cyan' },
    { id: 'bi-developer', ...roleResumes['bi-developer'], icon: 'LineChart', color: 'yellow' },
    { id: 'data-science', ...roleResumes['data-science'], icon: 'BrainCircuit', color: 'fuchsia' }
];