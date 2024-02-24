import { FunctionComponent } from 'react'

import { Box, Card, CardMedia, Typography } from '@mui/material'
import nextCodeSnippet2 from 'assets/next-code-snippet-2.png'
import shopifyIcon from 'assets/shopify-icon.png'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import Icon from 'src/general/Icon'
import Section from 'src/general/Section'
import { theme } from 'src/theme/theme.default'

/**
 * Work section.
 */
const Work: FunctionComponent = () => {
    const { t } = useTranslation()

    return (
        <Section maxWidth="xl">
            <Typography variant="h2">{t('home:work.title')}</Typography>
            <Box 
                sx={{ 
                    display: 'flex',
                    flexDirection:'column',
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
                    <Link 
                        href="/projects/next" 
                        style={{
                            textDecoration: 'none', 
                            color: theme.palette.text.primary, 
                        }}
                    >
                        <Box 
                            sx={{
                                display: 'flex', 
                                alignItems: 'center', 
                            }}
                        >
                            <Typography p={2} variant='h4'>
                                {t('home:work.next_title')}
                            </Typography>
                            <Icon name="arrow_right_alt" />
                        </Box>
                    </Link>
                    <Typography p={2}>
                        {t('home:work.next_subtitle')}
                    </Typography>
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
                    <Link 
                        href="/projects/shopify" 
                        style={{
                            textDecoration: 'none', 
                            color: theme.palette.text.primary, 
                        }}
                    >
                        <Box 
                            sx={{
                                display: 'flex', 
                                alignItems: 'center', 
                            }}
                        >
                            <Typography p={2} variant='h4'>
                                {t('home:work.shopify_title')}
                            </Typography>
                            <Icon name="arrow_right_alt" />
                        </Box>
                    </Link>
                    <Typography p={2}>
                        {t('home:work.shopify_subtitle')}
                    </Typography>
                </Card>
            </Box>
        </Section>
    )
}

export default Work
