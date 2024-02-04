import { GlobalStyles } from '@mui/material'

const globalStyles = (
    <GlobalStyles
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        styles={() => ({
            body: {
                overflowY: 'scroll',
            },
        })}
    />
)

export { globalStyles }
