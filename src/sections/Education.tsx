import { FunctionComponent } from 'react'

import { Box, Card, Typography } from '@mui/material'
import Section from 'src/general/Section'
import { useTranslation } from 'react-i18next'
import { theme } from 'src/theme/theme.default'
import Image from 'next/image'
import UoD from 'assets/uod.png'
import Hyndland from 'assets/hyndland.png'
import { useResizeDetector } from 'react-resize-detector'

/**
 * Education section.
 */
const Education: FunctionComponent = () => {
    const { t } = useTranslation()

    const { width, ref } = useResizeDetector()

    const sm = width && width < theme.breakpoints.values.md

    return (
        <div ref={ref}>
            <Section maxWidth="xl">
                <Typography mb={2} variant="h4" fontWeight="bold">
                    {t('cv:education.title')} 
                </Typography>
                <Card 
                    variant="outlined" 
                    sx={{ 
                        marginBottom: 2, 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: 2, 
                        backgroundColor: theme.palette.background.default,
                        border: "2px solid black"
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
                        <Box sx={{ width: '200px', height: 'auto' }}>
                            <Image
                                alt="UoD" 
                                src={UoD.src}
                                width={UoD.width}
                                height={UoD.height}
                                style={{
                                    maxWidth:'100%',
                                    minWidth: '200px',
                                    height: 'auto',
                                    width: 'auto'
                                }}
                            />
                        </Box>
                        <Box ml={sm ? 0 : 5} mt={sm ? 2 : 0}>
                            <Typography fontWeight="bold" align={sm ? "center" : "left"}>
                                {t('cv:education.uod.title')} 
                            </Typography>
                            <Typography ml={sm ? 0 : 2} variant="body2" align={sm ? "center" : "left"}>
                                {t('cv:education.uod.subtitle')} 
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" align={sm ? "center" : "left"}>
                                {t('cv:education.uod.qualification')} 
                            </Typography>
                            <Typography ml={sm ? 0 : 2} variant="body2" align={sm ? "center" : "left"}>
                                {t('cv:education.uod.subject')}
                            </Typography>
                        </Box>
                    </Box>
                </Card>
                <Card 
                    variant="outlined" 
                    sx={{ 
                        marginBottom: 5, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'flex-end', 
                        padding: 2, 
                        backgroundColor: theme.palette.background.default,
                        border: "2px solid black"
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
                                width: 'auto',
                            },
                        }} 
                    >
                        <Box ml={sm ? 0 : 5} mt={sm ? 2 : 0} order={sm ? 1 : 0}>
                            <Typography fontWeight="bold" align={sm ? "center" : "left"}>
                                {t('cv:education.hyndland.title')}
                            </Typography>
                            <Typography ml={sm ? 0 : 2} variant="body2" align={sm ? "center" : "left"}>
                                {t('cv:education.hyndland.subtitle')}
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" align={sm ? "center" : "left"}>
                                {t('cv:education.hyndland.highers')}
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" align={sm ? "center" : "left"}>
                                {t('cv:education.hyndland.nationals')}
                            </Typography>
                        </Box>
                        <Box order={sm ? 0 : 1} sx={{ width: '200px', height: 'auto' }}>
                            <Image
                                alt="Hyndland" 
                                src={Hyndland.src}
                                width={Hyndland.width}
                                height={Hyndland.height}
                                style={{
                                    maxWidth:'100%',
                                    minWidth: '200px',
                                    height: 'auto',
                                    width: 'auto'
                                }}
                            />
                        </Box>
                    </Box>
                </Card>
            </Section>
        </div>
    )
}

export default Education
