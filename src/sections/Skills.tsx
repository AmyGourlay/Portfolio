import { FunctionComponent } from 'react'

import { Box, Card, Chip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Section from 'src/general/Section'
import { theme } from 'src/theme/theme.default'

/**
 * Skills section.
 */
const Skills: FunctionComponent = () => {
    const { t } = useTranslation()

    const prominentSkills = [
        'React', 
        'JavaScript', 
        'Typescript', 
        'Node.js', 
        'Next.js', 
        'MUI', 
        'SASS/SCSS', 
        'Shopify', 
        'Liquid', 
        'Algolia', 
        'GitHub (+CI/CD)', 
        'JIRA',
    ]

    const familiarSkills = ['Three.js', 'Go', 'Docker', 'SQL', 'Vercel', 'C++', 'C#', 'Java']

    return (
        <Section maxWidth="xl">
            <Typography mb={2} variant="h4" fontWeight="bold">
                {t('cv:skills.title')}
            </Typography>
            <Box 
                mb={5} 
                sx={{ 
                    display: 'flex',
                    flexDirection:'column',
                    [theme.breakpoints.up('md')]: {
                        flexDirection: 'row',
                    },
                }}
            >
                <Card 
                    variant="outlined" 
                    sx={{ 
                        maxWidth: '100%',
                        padding: '20px', 
                        marginBottom: '20px',
                        backgroundColor: theme.palette.background.default,
                        border: '2px solid black',
                        [theme.breakpoints.up('md')]: {
                            maxWidth: '60%',
                            marginRight: '20px',
                            marginBottom: 0,
                        },
                    }}
                >
                    <Typography mb={2} fontWeight="bold">
                        {t('cv:skills.prominent')}
                    </Typography>
                    <Box
                        mb={2}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        {prominentSkills.map((skill) => (
                            <Chip
                                variant="outlined"
                                key={skill}
                                label={skill}
                                sx={{
                                    marginRight: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                        ))}
                    </Box>
                </Card>
                <Card 
                    variant="outlined" 
                    sx={{ 
                        maxWidth: '100%', 
                        padding: 2, 
                        backgroundColor: theme.palette.background.default,
                        border: '2px solid black',
                        [theme.breakpoints.up('md')]: {
                            maxWidth: '40%',
                        },
                    }}
                >
                    <Typography mb={2} fontWeight="bold">
                        {t('cv:skills.familiar')}
                    </Typography>
                    <Box
                        mb={2}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        {familiarSkills.map((skill) => (
                            <Chip
                                variant="outlined"
                                key={skill}
                                label={skill}
                                sx={{
                                    marginRight: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                        ))}
                    </Box>
                </Card>
            </Box>
        </Section>
    )
}

export default Skills
