'use client'

import { FunctionComponent, ReactNode, useEffect } from 'react'

import { Box } from '@mui/material'

import Footer from '@/general/Footer'
import { Header } from '@/general/Header'
import DefaultThemeProvider from '@/general/DefaultThemeProvider'
import { poppins } from './fonts'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from '@/translations/resources'
import Darkmode from 'darkmode-js'

import '../../styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface PageLayoutProps {
    children?: ReactNode
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
            <body>
                <QueryClientProvider client={queryClient}>
                    <DefaultThemeProvider>
                        <Box
                            position="relative"
                            sx={{
                                height: 'calc(100vh - 72px)',
                                top: '72px',
                            }}
                        >
                            <Header />
                            {children}
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
