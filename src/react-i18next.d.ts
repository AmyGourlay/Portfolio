import 'react-i18next'

import { resources } from '@/translations/resources'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        resources: typeof resources
    }
}
