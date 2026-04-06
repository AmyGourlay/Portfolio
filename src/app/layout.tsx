'use client'

import { FunctionComponent, ReactNode, useEffect } from 'react'

import { Box } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Darkmode from 'darkmode-js'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import '../../styles.css'
import { poppins } from './fonts'
import DefaultThemeProvider from '@/general/DefaultThemeProvider'
import Footer from '@/general/Footer'
import { Header } from '@/general/Header'
import { resources } from '@/translations/resources'

interface PageLayoutProps {
    readonly children?: ReactNode
}

i18next.use(initReactI18next).init({
    lng: 'en',
    resources: {
        en: resources,
    },
})

const queryClient = new QueryClient()

const options = {
    bottom: '50px',
    right: '30px',
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#212121',
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: '🌓',
    autoMatchOsTheme: true,
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => {
    useEffect(() => {
        const darkmode = new Darkmode(options)

        darkmode.showWidget()
    }, [])

    return (
        <html lang="en" className={poppins.variable}>
            <body
                style={{
                    margin: 0,
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <QueryClientProvider client={queryClient}>
                    <DefaultThemeProvider>
                        <Box
                            position="relative"
                            sx={{
                                height: '100vh',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                pt: '72px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Header />
                            <Box
                                sx={{
                                    flex: 1,
                                    minHeight: 0,
                                    overflowX: 'hidden',
                                    overflowY: 'auto',
                                }}
                            >
                                {children}
                            </Box>
                            <Footer />
                        </Box>
                    </DefaultThemeProvider>
                </QueryClientProvider>
            </body>
        </html>
    )
}

export type { PageLayoutProps }

export default PageLayout
