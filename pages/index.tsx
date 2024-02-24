import { ReactNode } from 'react'

import DefaultThemeProvider from 'src/general/DefaultThemeProvider'
import PageLayout from 'src/general/PageLayout'
import Heading from 'src/sections/Heading'
import Technologies from 'src/sections/Technologies'
import Work from 'src/sections/Work'
import { NextPageWithLayout } from 'src/types'

const Page: NextPageWithLayout = () => {
    return (
        <PageLayout>
            <Heading />
            <Work />
            <Technologies />
        </PageLayout>
    )
}

Page.getLayout = (page): ReactNode => <DefaultThemeProvider>{page}</DefaultThemeProvider>

export default Page
