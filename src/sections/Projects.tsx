import { FunctionComponent } from 'react'

import { Box, Card, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Section from 'src/general/Section'
import { theme } from 'src/theme/theme.default'

/**
 * Projects section.
 */
const Projects: FunctionComponent = () => {
    const { t } = useTranslation()

    return (
        <Section maxWidth="xl">
            <Typography mb={2} variant="h4" fontWeight="bold">
                {t('cv:projects.title')}
            </Typography>
            <Card 
                variant="outlined" 
                sx={{ 
                    marginBottom: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '20px', 
                    backgroundColor: theme.palette.background.default,
                    border: '2px solid black',
                }}
            >
                <Box>
                    <Typography mb={2} fontWeight="bold">
                        {t('cv:projects.research.title')}
                    </Typography>
                    <Typography mb={4}>
                        {t('cv:projects.research.description')}
                    </Typography>
                    <Typography mb={2} fontWeight="bold">
                        {t('cv:projects.outreach.title')}
                    </Typography>
                    <Typography mb={4}>
                        {t('cv:projects.outreach.description')}
                    </Typography>
                    <Typography mb={2} fontWeight="bold">
                        {t('cv:projects.exchange.title')} 
                    </Typography>
                    <Typography mb={4}>
                        {t('cv:projects.exchange.description')}
                    </Typography>
                </Box>
            </Card>
        </Section>
    )
}

export default Projects
