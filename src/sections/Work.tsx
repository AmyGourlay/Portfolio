import { FunctionComponent } from 'react'

import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material'
import nextCodeSnippet2 from 'assets/next-code-snippet-2.png'
import shopifyIcon from 'assets/shopify-icon.png'
import { useTranslation } from 'react-i18next'

import Section from '@/general/Section'
import { theme } from '@/theme/theme.default'
import { useRouter } from 'next/navigation'
import { ArrowForward } from '@mui/icons-material'

/**
 * Work section.
 */
const Work: FunctionComponent = () => {
    const { t } = useTranslation()

    const navigation = useRouter()

    return (
        <Section maxWidth="xl">
            <Typography variant="h2">{t('home:work.title')}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    [theme.breakpoints.up('md')]: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        width: '100%',
                        margin: '25px 0',
                        border: '2px solid black',
                        [theme.breakpoints.up('md')]: {
                            margin: '25px 25px 25px 0',
                        },
                    }}
                >
                    <CardMedia
                        id="backgroundImage"
                        title=""
                        image={nextCodeSnippet2.src}
                        sx={{
                            height: '200px',
                            [theme.breakpoints.up('md')]: {
                                height: '400px',
                            },
                        }}
                    />
                    <IconButton onClick={() => navigation.push('/projects/next')} disableRipple>
                        <Typography p={2} variant="h4">
                            {t('home:work.next_title')}
                        </Typography>
                        <ArrowForward />
                    </IconButton>
                    <Typography p={2}>{t('home:work.next_subtitle')}</Typography>
                </Card>
                <Card
                    variant="outlined"
                    sx={{
                        width: '100%',
                        margin: '25px 0',
                        border: '2px solid black',
                        [theme.breakpoints.up('md')]: {
                            margin: '25px 0 25px 25px',
                        },
                    }}
                >
                    <CardMedia
                        title=""
                        image={shopifyIcon.src}
                        sx={{
                            height: '200px',
                            [theme.breakpoints.up('md')]: {
                                height: '400px',
                            },
                        }}
                    />
                    <IconButton onClick={() => navigation.push('/projects/shopify')} disableRipple>
                        <Typography p={2} variant="h4">
                            {t('home:work.shopify_title')}
                        </Typography>
                        <ArrowForward />
                    </IconButton>
                    <Typography p={2}>{t('home:work.shopify_subtitle')}</Typography>
                </Card>
            </Box>
        </Section>
    )
}

export default Work
