import { TechStack } from '@/lib/api-data'

const fetchTechStacks = async (): Promise<TechStack[]> => {
    const response = await fetch('/api/stacks')

    if (!response.ok) {
        throw new Error('Failed to fetch tech stacks')
    }

    const json = await response.json()

    return json.data
}

const fetchTechStack = async (id: string): Promise<TechStack> => {
    const response = await fetch(`/api/stacks/${id}`)

    if (!response.ok) {
        throw new Error('Failed to fetch tech stack')
    }

    const json = await response.json()

    return json.data
}

export { fetchTechStack, fetchTechStacks }
