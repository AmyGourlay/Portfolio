import { FunctionComponent } from 'react'

import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { fontFamilyConfig, theme } from 'src/theme/theme.default'

const AppName: FunctionComponent = () => {
    const { t } = useTranslation()

    return (
        <Typography
            variant="h2"
            whiteSpace="nowrap"
            color={theme.palette.text.primary}
            sx={{
                marginBottom: 0,
                fontWeight: fontFamilyConfig.weights.medium,
            }}
        >
            {t('home:header.name')}
        </Typography>
    )
}

export default AppName
