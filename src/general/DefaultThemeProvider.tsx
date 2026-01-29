import { FunctionComponent, PropsWithChildren } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { globalStyles } from '@/general/utils/globalStyles'
import { theme } from '@/theme/theme.default'

const DefaultThemeProvider: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles}
        {children}
    </ThemeProvider>
)

export default DefaultThemeProvider
