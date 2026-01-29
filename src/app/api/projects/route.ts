import { NextResponse } from 'next/server'

import { projectsData } from '@/lib/api-data'

/**
 * GET /api/projects
 * Returns all projects
 */
export async function GET() {
    try {
        return NextResponse.json({
            success: true,
            data: projectsData,
            total: projectsData.length,
        })
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch projects',
            },
            { status: 500 }
        )
    }
}
