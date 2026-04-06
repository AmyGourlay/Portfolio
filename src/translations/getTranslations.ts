import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CustomTypeOptions } from 'react-i18next'

type TranslationNamespace = Extract<keyof CustomTypeOptions['resources'], string>

interface GetServerSidePropsWithTranslations {
    (namespaces?: TranslationNamespace[]): {
        getStaticProps: GetStaticProps
        getStaticPaths: GetStaticPaths
    }
}

const getTranslations: GetServerSidePropsWithTranslations = (namespaces = []) => ({
    getStaticProps: async ({ locale = 'en' }) => ({
        props: {
            ...(await serverSideTranslations(locale, [...namespaces])),
        },
    }),
    getStaticPaths: () => ({
        paths: [],
        fallback: 'blocking',
    }),
})

export { getTranslations }
