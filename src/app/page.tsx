'use client'

import { FC } from 'react'

import Heading from 'src/sections/Heading'
import Technologies from 'src/sections/Technologies'
import Work from 'src/sections/Work'

const Page: FC = () => {
    return (
        <>
            <Heading />
            <Work />
            <Technologies />
        </>
    )
}

export default Page
