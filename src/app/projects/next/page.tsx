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
            <ProjectScreen title={t('next:header')} subtitle={t('next:subtitle')} typingText={t('next:typing')} />
            <Section id="scroll" maxWidth="xl">
                <Typography variant="h2">{t('next:user_experience.title')}</Typography>
                <Typography>{t('next:user_experience.description')}</Typography>
                <Typography>{t('next:user_experience.material_ui')}</Typography>
            </Section>
            <Section maxWidth="xl">
                <Typography variant="h2">{t('next:contentful.title')}</Typography>
                <Typography>{t('next:contentful.description')}</Typography>
                <Typography>{t('next:contentful.components')}</Typography>
            </Section>
            <Section maxWidth="xl">
                <Typography variant="h2">{t('next:additional_experience.title')}</Typography>
                <Typography variant="h4">{t('next:additional_experience.framer_motion')}</Typography>
                <Typography variant="h4">{t('next:additional_experience.three')}</Typography>
            </Section>
        </>
    )
}

export default Page
