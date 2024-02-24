import { FunctionComponent } from 'react'

import { Box, Card, Typography } from '@mui/material'
import imx from 'assets/imx.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useResizeDetector } from 'react-resize-detector'

import Section from 'src/general/Section'
import { theme } from 'src/theme/theme.default'

/**
 * Publication section.
 */
const Publication: FunctionComponent = () => {
    const { t } = useTranslation()

    const { width, ref } = useResizeDetector()

    const sm = width && width < theme.breakpoints.values.md

    return (
        <div ref={ref}>
            <Section maxWidth="xl">
                <Typography mb={2} variant="h4" fontWeight="bold">
                    {t('cv:publication.title')} 
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
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection:'column',
                            alignItems: 'center',
                            [theme.breakpoints.up('md')]: {
                                flexDirection: 'row',
                            },
                        }} 
                    >
                        <Box 
                            sx={{
                                width: '200px', 
                                height: 'auto', 
                            }}
                        >
                            <Image
                                alt="IMX" 
                                src={imx.src}
                                width={imx.width}
                                height={imx.height}
                                style={{
                                    maxWidth:'100%',
                                    minWidth: '200px',
                                    height: 'auto',
                                    width: 'auto',
                                }}
                            />
                        </Box>
                        <Box ml={sm ? 0 : 5}>
                            <Typography variant="body2" fontWeight="bold" align={sm ? 'center' : 'left'}>
                                {t('cv:publication.type')} 
                            </Typography>
                            <Typography variant="body2" align={sm ? 'center' : 'left'}>
                                {t('cv:publication.subtitle')} 
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Section>
        </div>
    )
}

export default Publication
