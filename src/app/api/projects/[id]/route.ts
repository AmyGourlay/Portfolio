import { NextResponse } from 'next/server'

import { projectsData } from '@/lib/api-data'

interface Params {
    id: string
}

/**
 * GET /api/projects/[id]
 * Returns a single project by ID
 */
export async function GET(_request: Request, { params }: { params: Params }) {
    try {
        const { id } = params
        const project = projectsData.find((item) => item.id === id)

        if (!project) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Project not found',
                },
                { status: 404 }
            )
        }

        return NextResponse.json({
            success: true,
            data: project,
        })
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch project',
            },
            { status: 500 }
        )
    }
}
