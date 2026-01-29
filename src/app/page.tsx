'use client'

import { FC } from 'react'
import { Box, Typography, Paper, Grid, Skeleton, Alert, Chip } from '@mui/material'
import Heading from '@/sections/Heading'
import Section from '@/sections/Section'
import { useTranslation } from 'react-i18next'
import { fetchTechStacks, fetchProjects } from '@/utils/endpoints'
import { useQuery } from '@tanstack/react-query'

const TechStackSkeletonLoader: FC = () => (
    <Grid container spacing={3}>
        {[...Array(9)].map((_, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
                    <Skeleton variant="circular" width={60} height={60} sx={{ mb: 2 }} />
                    <Skeleton width="80%" height={24} sx={{ mb: 1 }} />
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

    const {
        data: projects,
        isPending: isLoadingProjects,
        isError: projectsError,
    } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    })

    return (
        <>
            <Heading />
            <Section>
                <Box>
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        {t('home:technical_expertise')}
                    </Typography>
                    {isLoadingStacks ? <TechStackSkeletonLoader /> : null}
                    {stacksError ? <Alert severity="error">{t('home:stacks_error')}</Alert> : null}
                    {stacks ? (
                        <Grid container spacing={3}>
                            {stacks.map((tech) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tech.id}>
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
                                            {tech.icon}
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
            <Section>
                <Box>
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        {t('home:interactive_examples')}
                    </Typography>
                    {isLoadingProjects ? (
                        <Grid container spacing={4}>
                            {[...Array(3)].map((_, index) => (
                                <Grid size={{ xs: 12, md: 4 }} key={index}>
                                    <Paper
                                        sx={{
                                            p: 4,
                                            height: 300,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Skeleton variant="circular" width={60} height={60} />
                                        <Skeleton width="80%" height={28} sx={{ my: 2 }} />
                                        <Skeleton height={80} />
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    ) : null}
                    {projectsError ? <Alert severity="error">{t('home:projects_error')}</Alert> : null}
                    {projects ? (
                        <Grid container spacing={4}>
                            {projects.map((project) => (
                                <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                                    <Paper
                                        sx={{
                                            p: 4,
                                            height: 300,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            transition: 'transform 0.18s ease',
                                            position: 'relative',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                            },
                                        }}
                                    >
                                        <Typography variant="h2" sx={{ mb: 2 }}>
                                            {project.icon}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom align="center">
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            align="center"
                                            sx={{
                                                mb: 2,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 0.5,
                                                flexWrap: 'wrap',
                                                justifyContent: 'center',
                                                mt: 'auto',
                                            }}
                                        >
                                            {project.techStack.map((tech) => (
                                                <Chip key={tech} label={tech} color="primary" />
                                            ))}
                                        </Box>
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
