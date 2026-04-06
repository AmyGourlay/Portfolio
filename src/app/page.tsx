'use client'

import { FC } from 'react'

import { Alert, Box, Grid, Paper, Skeleton, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import Heading from '@/sections/Heading'
import Section from '@/sections/Section'
import { fetchTechStacks } from '@/utils/endpoints'

const TechStackSkeletonLoader: FC = () => (
    <Grid container spacing={3}>
        {Array.from({
            length: 9,
        }).map((_, index) => (
            <Grid
                size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                }}
                key={index}
            >
                <Paper
                    sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 225,
                    }}
                >
                    <Skeleton
                        variant="circular"
                        width={60}
                        height={60}
                        sx={{
                            mb: 2,
                        }}
                    />
                    <Skeleton
                        width="80%"
                        height={24}
                        sx={{
                            mb: 1,
                        }}
                    />
                    <Skeleton width="60%" height={20} />
                </Paper>
            </Grid>
        ))}
    </Grid>
)

const Page: FC = () => {
    const { t } = useTranslation()

    const {
        data: stacks,
        isPending: isLoadingStacks,
        isError: stacksError,
    } = useQuery({
        queryKey: ['stacks'],
        queryFn: fetchTechStacks,
    })

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
                    {isLoadingStacks ? <TechStackSkeletonLoader /> : null}
                    {stacksError ? <Alert severity="error">{t('home:stacks_error')}</Alert> : null}
                    {stacks ? (
                        <Grid container spacing={3}>
                            {stacks.map((tech) => (
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
                    ) : null}
                </Box>
            </Section>
        </>
    )
}

export default Page
