import { Container } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const Section: FC<PropsWithChildren> = ({ children }) => (
    <Container maxWidth="xl" sx={{ my: 4 }}>
        {children}
    </Container>
)

export default Section
