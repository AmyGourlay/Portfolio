'use client'

import { FunctionComponent, ReactNode } from 'react'

import { Box } from '@mui/material'

import Footer from 'src/general/Footer'
import { Header } from 'src/general/Header'
import DefaultThemeProvider from 'src/general/DefaultThemeProvider'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from 'src/translations/resources'

interface PageLayoutProps {
    children?: ReactNode
}

i18next.use(initReactI18next).init({
    lng: 'en',
    resources: {
        en: resources,
    },
})

/**
 * Standard page layout.
 *
 * Automatically sets the browser's tab title to the page title.
 */
const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => (
    <html lang="en">
        <body>
            <DefaultThemeProvider>
                <Box
                    component="div"
                    id="pageLayout"
                    width={1}
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
        </body>
    </html>
)

export type { PageLayoutProps }

export default PageLayout
