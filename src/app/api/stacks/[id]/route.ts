import { NextRequest, NextResponse } from 'next/server'

import { techStackData } from '@/lib/api-data'

interface Params {
    id: string
}

/**
 * GET /api/stacks/[id]
 * Returns a single tech stack by ID.
 */
export const GET = async (_request: NextRequest, { params }: { params: Promise<Params> }): Promise<NextResponse> => {
    try {
        const { id } = await params

        const stack = techStackData.find((item) => item.id === id)

        if (!stack) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Tech stack not found',
                },
                {
                    status: 404,
                }
            )
        }

        return NextResponse.json({
            success: true,
            data: stack,
        })
    } catch {
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch tech stack',
            },
            {
                status: 500,
            }
        )
    }
}
