import { NextResponse } from 'next/server'

import { techStackData } from '@/lib/api-data'

interface Params {
    id: string
}

/**
 * GET /api/stacks/[id]
 * Returns a single tech stack by ID
 */
export async function GET(_request: Request, { params }: { params: Params }) {
    try {
        const { id } = params
        const stack = techStackData.find((item) => item.id === id)

        if (!stack) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Tech stack not found',
                },
                { status: 404 }
            )
        }

        return NextResponse.json({
            success: true,
            data: stack,
        })
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch tech stack',
            },
            { status: 500 }
        )
    }
}
