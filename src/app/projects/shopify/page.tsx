'use client'

import { FC } from 'react'

import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Section from 'src/general/Section'
import ProjectScreen from 'src/sections/ProjectScreen'

const Page: FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <ProjectScreen
                title={t('shopify:header')}
                subtitle={t('shopify:subtitle')}
                typingText={t('shopify:typing')}
            />
            <Section id="scroll" maxWidth="xl">
                <Typography variant="h2">{t('shopify:experience.title')}</Typography>
                <Typography>{t('shopify:experience.theme_customisation')}</Typography>
                <Typography>{t('shopify:experience.custom_sections')}</Typography>
                <Typography>{t('shopify:experience.quantity_controls')}</Typography>
                <Typography>{t('shopify:experience.delivery_timeline')}</Typography>
                <Typography>{t('shopify:experience.migration')}</Typography>
            </Section>
            <Section maxWidth="xl">
                <Typography variant="h2">{t('shopify:google_tag_manager.title')}</Typography>
                <Typography>{t('shopify:google_tag_manager.description')}</Typography>
            </Section>
            <Section maxWidth="xl">
                <Typography variant="h2">{t('shopify:algolia.title')}</Typography>
                <Typography>{t('shopify:algolia.description')}</Typography>
            </Section>
            <Section maxWidth="xl">
                <Typography variant="h2">{t('shopify:performance.title')}</Typography>
                <Typography>{t('shopify:performance.description')}</Typography>
                <Typography>{t('shopify:performance.lazy_loading')}</Typography>
            </Section>
        </>
    )
}

export default Page
