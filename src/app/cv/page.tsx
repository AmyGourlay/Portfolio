'use client'

import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Section from '@/general/Section'
import Education from '@/sections/Education'
import Job from '@/sections/Job'
import Projects from '@/sections/Projects'
import Publication from '@/sections/Publication'
import Skills from '@/sections/Skills'

const Page: FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Section maxWidth="xl">
                <Box
                    mt={2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2">{t('cv:title')}</Typography>
                    <Typography>{t('cv:email')}</Typography>
                </Box>
            </Section>
            <Skills />
            <Education />
            <Publication />
            <Job />
            <Projects />
        </>
    )
}

export default Page
