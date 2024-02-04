import { FunctionComponent, PropsWithChildren } from 'react'

import { Box, Container, ContainerProps } from '@mui/material'
import { Except } from 'type-fest'

import { Spacing } from 'src/general/utils/config'
import { theme } from 'src/theme/theme.default'

interface SectionProps extends Except<ContainerProps, 'sx'> {
    backgroundColor?: string
    fadeType?: string
    isFullScreen?: boolean
    isDarkMode?: boolean
    hasEllipse?: boolean
    backgroundImage?: string
}

/**
 * Standard section layout with spacing, background colour and optional ellipse design.
 */
const Section: FunctionComponent<PropsWithChildren<SectionProps>> = ({
    children,
    maxWidth = 'sm',
    isFullScreen = false,
    isDarkMode = false,
    hasEllipse = false,
    fadeType = 'none',
    backgroundColor = theme.palette.background.default,
    backgroundImage = undefined,
    ...props
}) => {
    let background = backgroundColor

    switch (fadeType) {
        case 'both': {
            background = `linear-gradient(
                    180deg,
                    ${theme.palette.background.default} 0%,
                    ${backgroundColor} 18.9%,
                    ${backgroundColor} 79.07%,
                    ${theme.palette.background.default} 100%
                )`

            break
        }

        case 'top': {
            background = `linear-gradient(to bottom, transparent, ${backgroundColor})`

            break
        }

        case 'bottom': {
            background = `linear-gradient(to top, transparent, ${backgroundColor})`

            break
        }
    }

    return (
        <Box
            sx={{
                background: background,
                backgroundImage: backgroundImage ? `url(${backgroundImage})!important` : 'currentColor',
                backgroundRepeat: 'no-repeat !important',
                backgroundSize: 'contain !important',
                backgroundPosition: 'center !important',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Container
                id="container"
                sx={{
                    py: {
                        xs: Spacing.Body / 5,
                        md: Spacing.Body,
                    },
                    [theme.breakpoints.up('md')]: {
                        height: isFullScreen && 'calc(100vh - 69px)',
                    },
                    [theme.breakpoints.down('md')]: {
                        height: isFullScreen && 'calc(100vh - 69px)',
                    },
                }}
                maxWidth={maxWidth}
                {...props}
            >
                {children}
            </Container>
        </Box>
    )
}

export type { SectionProps }

export default Section
