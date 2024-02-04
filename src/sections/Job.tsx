import { FunctionComponent } from 'react'

import { Box, Card, List, ListItemText, Typography } from '@mui/material'
import Section from 'src/general/Section'
import { useTranslation } from 'react-i18next'
import { theme } from 'src/theme/theme.default'
import { useResizeDetector } from 'react-resize-detector'

/**
 * Job section.
 */
const Job: FunctionComponent = () => {
    const { t } = useTranslation()

    const { width, ref } = useResizeDetector()

    const sm = width && width < theme.breakpoints.values.md

    return (
        <div ref={ref}>
            <Section maxWidth="xl">
                <Typography mb={2} variant="h4" fontWeight="bold">
                    {t('cv:work.title')}
                </Typography>
                <Card 
                    variant="outlined" 
                    sx={{ 
                        marginBottom: "20px", 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: "20px", 
                        backgroundColor: theme.palette.background.default,
                        border: "2px solid black"
                    }}
                >
                    <Box>
                        <Typography fontWeight="bold">
                            {t('cv:work.mohc.company')}
                        </Typography>
                        <Typography>
                            {t('cv:work.mohc.job')}
                        </Typography>
                        <List sx={{ listStyleType: 'disc', marginLeft: sm ? 3 : 5 }}>
                            <ListItemText sx={{ display: 'list-item' }}>
                                <Typography variant='body2'>
                                    {t('cv:work.mohc.description1')}
                                </Typography>
                            </ListItemText>
                            <ListItemText sx={{ display: 'list-item' }}>
                                <Typography variant='body2'>
                                    {t('cv:work.mohc.description2')}
                                </Typography>
                            </ListItemText>
                            <ListItemText sx={{ display: 'list-item' }}>
                                <Typography variant='body2'>
                                    {t('cv:work.mohc.description3')}    
                                </Typography>
                            </ListItemText>
                        </List>
                    </Box>
                </Card>
                <Card 
                    variant="outlined" 
                    sx={{ 
                        marginBottom: "20px", 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: "20px", 
                        backgroundColor: theme.palette.background.default,
                        border: "2px solid black"
                    }}
                >
                    <Box>
                        <Typography fontWeight="bold">
                            {t('cv:work.uod.company')}
                        </Typography>
                        <Typography>
                            {t('cv:work.uod.job')}
                        </Typography>
                        <List sx={{ listStyleType: 'disc', marginLeft: sm ? 3 : 5 }}>
                            <ListItemText sx={{ display: 'list-item' }}>
                                <Typography variant='body2'>
                                    {t('cv:work.uod.description1')}
                                </Typography>
                            </ListItemText>
                            <ListItemText sx={{ display: 'list-item' }}>
                                <Typography variant='body2'>
                                    {t('cv:work.uod.description2')}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Box>
                </Card>
            </Section>
        </div>
    )
}

export default Job
