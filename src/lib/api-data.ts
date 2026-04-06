// Central data
interface TechStack {
    id: string
    name: string
    icon: string
    category: string
    description: string
}

const techStackData: TechStack[] = [
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

export type { TechStack }

export { techStackData }
