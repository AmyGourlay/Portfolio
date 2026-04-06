import { FC, PropsWithChildren } from 'react'

import { Container } from '@mui/material'

const Section: FC<PropsWithChildren> = ({ children }) => (
    <Container
        maxWidth="xl"
        sx={{
            my: 4,
        }}
    >
        {children}
    </Container>
)

export default Section
