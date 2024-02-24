import { FunctionComponent } from 'react'

import Darkmode from 'darkmode-js'
import i18n from 'i18next'
import { enableMapSet } from 'immer'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { initReactI18next } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { resources } from 'src/translations/resources'
import { NextPageWithLayout } from 'src/types'

// Styles for darkmode library
// eslint-disable-next-line no-restricted-imports
import '../styles.css'

interface CustomAppProps extends AppProps {
    readonly Component: NextPageWithLayout
}

enableMapSet()

const queryClient = new QueryClient()

i18n.use(initReactI18next).init({
    lng: 'en',
    resources: {
        en: resources,
    },
})

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

const darkmode = new Darkmode(options)

darkmode.showWidget()

const CustomApp: FunctionComponent<CustomAppProps> = ({ Component, pageProps, router }) => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <ReactQueryDevtools initialIsOpen={false} />
                {Component.getLayout ? (
                    Component.getLayout(<Component key={router.pathname} {...pageProps} />, pageProps)
                ) : (
                    <Component key={router.pathname} {...pageProps} />
                )}
        </QueryClientProvider>
    </>
)

export type { CustomAppProps }

export default CustomApp
