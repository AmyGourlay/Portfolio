import type { UserConfig } from 'next-i18next'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const config = JSON.parse(readFileSync(path.resolve('./src/translations/config.json'), 'utf8'))

const i18NextConfig: UserConfig = {
    i18n: config['default'] || config.default,
    defaultNS: 'general',
    react: {
        useSuspense: false,
    },
}

export default i18NextConfig
