// Central data

export interface TechStack {
    id: string
    name: string
    icon: string
    category: string
    description: string
}

export interface Project {
    id: string
    title: string
    description: string
    icon: string
    gradient: string
    link: string
    techStack: string[]
}

export const techStackData: TechStack[] = [
    {
        id: '1',
        name: 'Next.js',
        icon: '⚡',
        category: 'Frontend',
        description: 'Server-side rendering, static generation, and the App Router',
    },
    {
        id: '2',
        name: 'TypeScript',
        icon: '📝',
        category: 'Language',
        description: 'Type-safe development with advanced features',
    },
    {
        id: '3',
        name: 'React',
        icon: '⚛️',
        category: 'Frontend',
        description: 'Component-based architecture and hooks',
    },
    {
        id: '4',
        name: 'Material UI',
        icon: '🎨',
        category: 'Design',
        description: 'Customizable component library with theming',
    },
    {
        id: '5',
        name: 'OpenAI',
        icon: '🤖',
        category: 'AI',
        description: 'AI integration and chat interfaces',
    },
    {
        id: '6',
        name: 'i18n',
        icon: '🌍',
        category: 'Localization',
        description: 'Multi-language support with next-i18next',
    },
    {
        id: '7',
        name: 'GitHub',
        icon: '🐙',
        category: 'DevOps',
        description: 'Version control and collaborative development',
    },
    {
        id: '8',
        name: 'CI/CD',
        icon: '🔄',
        category: 'DevOps',
        description: 'Automated testing and deployment pipelines',
    },
    {
        id: '9',
        name: 'SSR',
        icon: '🚀',
        category: 'Performance',
        description: 'Server-side rendering for optimal performance',
    },
]

export const projectsData: Project[] = [
    {
        id: '1',
        title: 'Image Toolkit',
        description: 'Advanced image processing with optimization and transformation',
        link: '/demos/image-toolkit',
        icon: '🖼️',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        techStack: ['Next.js', 'Sharp', 'TypeScript'],
    },
    {
        id: '2',
        title: 'PDF Master',
        description: 'Generate, analyze and manipulate PDFs with precision',
        link: '/demos/pdf-master',
        icon: '📄',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        techStack: ['React', 'PDF.js', 'Material UI'],
    },
    {
        id: '3',
        title: 'AI Chat',
        description: 'Interactive AI chatbot with streaming responses',
        link: '/demos/ai-chat',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        techStack: ['OpenAI API', 'WebSockets', 'TypeScript'],
    },
]
