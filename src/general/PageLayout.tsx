import { FunctionComponent, PropsWithChildren } from 'react'

import { Box } from '@mui/material'

import Footer from '@/general/Footer'
import { Header } from '@/general/Header'
import PageTitle from '@/general/PageTitle'

interface menuOptions {
    slug?: string
    displayName?: string
}

interface PageLayoutProps {
    readonly title?: string
    readonly menuOptions?: menuOptions[]
}

/**
 * Standard page layout.
 *
 * Automatically sets the browser's tab title to the page title.
 */
const PageLayout: FunctionComponent<PropsWithChildren<PageLayoutProps>> = ({ title, menuOptions, children }) => (
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
        {title ? <PageTitle>{title}</PageTitle> : null}
        <Header menuOptions={menuOptions} />
        {children}
        <Footer />
    </Box>
)

export type { PageLayoutProps }

export default PageLayout
