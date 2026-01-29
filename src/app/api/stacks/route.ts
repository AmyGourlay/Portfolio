import { NextResponse } from 'next/server'

import { techStackData } from '@/lib/api-data'

/**
 * GET /api/stacks
 * Returns all tech stacks
 */
export async function GET() {
    try {
        return NextResponse.json({
            success: true,
            data: techStackData,
            total: techStackData.length,
        })
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch tech stacks',
            },
            { status: 500 }
        )
    }
}
