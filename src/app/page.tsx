'use client'

import { FC } from 'react'

import { Box, Grid, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { techStackData } from '@/lib/api-data'
import Heading from '@/sections/Heading'
import Section from '@/sections/Section'

const Page: FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Heading />
            <Section>
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 4,
                        }}
                    >
                        {t('home:technical_expertise')}
                    </Typography>
                    <Grid container spacing={3}>
                        {techStackData.map((tech) => (
                            <Grid
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 4,
                                }}
                                key={tech.id}
                            >
                                <Paper
                                    sx={{
                                        p: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: 225,
                                        transition: 'transform 0.18s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                        },
                                    }}
                                >
                                    <Typography variant="h2" mb={2}>
                                        <Box
                                            component="span"
                                            className="darkmode-ignore"
                                            sx={{
                                                display: 'inline-block',
                                            }}
                                        >
                                            {tech.icon}
                                        </Box>
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        {tech.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {tech.category}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        sx={{
                                            mt: 'auto',
                                            maxWidth: '100%',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {tech.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Section>
        </>
    )
}

export default Page
