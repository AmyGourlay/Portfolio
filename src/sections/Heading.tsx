import { FunctionComponent } from 'react'

import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import paperAirplanes from 'assets/paper-airplanes.png'
import Image from 'next/image'

import Section from 'src/general/Section'
import { theme } from 'src/theme/theme.default'

/**
 * Heading section.
 */
const Heading: FunctionComponent = () => {
    const { t } = useTranslation()

    return (
        <Section maxWidth="xl" isFullScreen backgroundColor='#F5E1D9' fadeType='bottom'> 
            <Box
                component="div"
                sx={{
                    maxHeight: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    [theme.breakpoints.up('md')]: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h1' mb={2}>{t('home:heading.title')}</Typography>
                    <Typography align='center' variant='h3' mb={4}>{t('home:heading.subtitle')}</Typography>
                </Box>
                <Box sx={{ width: 'auto', height: '550px' }}>
                    <Image
                        alt="react" 
                        src={paperAirplanes.src}
                        width={paperAirplanes.width}
                        height={paperAirplanes.height}
                        priority
                        style={{
                            maxHeight:'100%',
                            maxWidth: '100%',
                            height: 'auto',
                            width: 'auto',
                            mixBlendMode: 'normal'
                        }}
                    />
                </Box>
            </Box>
        </Section>
    )
}

export default Heading
