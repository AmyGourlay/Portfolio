'use client'

import { ComponentType, FC } from 'react'

import { Box } from '@mui/material'
import dynamic from 'next/dynamic'

import { withBasePath } from '@/utils/basePath'

const CVViewer = dynamic<{ pdfPath: string }>(
    () => import('@/sections/CVViewer').then((module_) => module_.default as ComponentType<{ pdfPath: string }>),
    {
        ssr: false,
    }
)

const Page: FC = () => (
    <Box
        sx={{
            height: '100%',
            maxHeight: '100%',
            minHeight: 0,
            overflow: 'hidden',
            p: 2,
            boxSizing: 'border-box',
        }}
    >
        <CVViewer pdfPath={withBasePath('/AmyGourlayCV.pdf')} />
    </Box>
)

export default Page
