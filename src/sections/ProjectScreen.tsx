import { FunctionComponent } from 'react'

import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import Icon from 'src/general/Icon'
import Section from 'src/general/Section'

interface ProjectScreenProps {
    readonly title: string
    readonly subtitle: string
    readonly typingText?: string
}

/**
 * Project screen section.
 */
const ProjectScreen: FunctionComponent<ProjectScreenProps> = ({ title, subtitle, typingText }) => {
    return (
        <Section maxWidth="xl" isFullScreen>
            <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100%', 
                }}
            >
                <Typography variant="h1" mb={4}>{title}</Typography>
                <Typography align='center' mb={4}>{subtitle}</Typography>
                <Box 
                    sx={{
                        backgroundColor: 'black', 
                        width: '300px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                    }}
                >
                    <Typography
                        align="center"
                        variant="body1"
                        sx={{
                            '@keyframes typing': {
                                '0%': {
                                    border: 'none',
                                    width: 0,
                                },
                                '1%': {
                                    borderRight: '3px solid',
                                    width: 0,
                                },
                                '99%': {
                                    borderRight: '3px solid',
                                    width: '27ch',
                                },
                                '100%': {
                                    width: '27ch',
                                },
                            },

                            '@keyframes blink': {
                                '50%': {
                                    borderColor: 'transparent',
                                },
                            },
                            width: 0,
                            animation: 'typing 2s steps(27) forwards, blink .5s step-end 2s infinite alternate',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            fontFamily: 'monospace',
                            color: 'white',
                        }}
                    >
                        {typingText}
                    </Typography>
                </Box>
                <Box
                    mt={5}
                    sx={{
                        background: 'transparent !important',
                        '@keyframes bouncey': {
                            '0%': {
                                transform: 'translateY(0)',
                            },
                            '50%': {
                                transform: 'translateY(15px)',
                            },
                            '100%': {
                                transform: 'translateY(0)',
                            },
                        },
                        animation: 'bouncey 1.5s linear infinite',
                    }}
                >
                    <Link href="#scroll">
                        <Icon size="large" color="black" name="expand_more" />
                    </Link>
                </Box>
            </Box>
        </Section>
    )
}

export default ProjectScreen
