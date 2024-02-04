import { ReactNode } from 'react'

import DefaultThemeProvider from 'src/general/DefaultThemeProvider'
import { NextPageWithLayout } from 'src/types'
import PageLayout from 'src/general/PageLayout'
import { Box, Typography } from '@mui/material'
import Section from 'src/general/Section'
import Skills from 'src/sections/Skills'
import { useTranslation } from 'react-i18next'
import Education from 'src/sections/Education'
import Publication from 'src/sections/Publication'
import Job from 'src/sections/Job'
import Projects from 'src/sections/Projects'

const Page: NextPageWithLayout = () => {
    const { t } = useTranslation()

    return (
        <PageLayout>
            <Section maxWidth="xl">
                <Box mt={2} sx={{ display: 'flex', flexDirection: "column", alignItems: "center"}}>
                    <Typography variant="h2">
                        {t('cv:title')}
                    </Typography>
                    <Typography>
                        {t('cv:email')}
                    </Typography>
                </Box>
            </Section>
            <Skills />
            <Education />
            <Publication />
            <Job />
            <Projects />
        </PageLayout>
    )
}

Page.getLayout = (page): ReactNode => <DefaultThemeProvider>{page}</DefaultThemeProvider>

export default Page
