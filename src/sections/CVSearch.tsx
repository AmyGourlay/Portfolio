'use client'

import { FC } from 'react'

import { Search } from '@mui/icons-material'
import { Clear, NavigateBefore, NavigateNext } from '@mui/icons-material'
import { Box, Button, Chip, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { pdfTextSearch } from '@/utils/pdfTextSearch'

interface CVSearchProps {
    readonly numberPages: number
    readonly currentPage: number
    readonly setCurrentPage: (number: number) => void
    readonly searchText: string
    readonly setSearchText: (text: string) => void
    readonly matches: SearchMatch[]
    readonly setMatches: (matches: SearchMatch[]) => void
    readonly currentMatchIndex: number
    readonly setCurrentMatchIndex: (index: number) => void
}

interface SearchMatch {
    pageNum: number
    occurrenceOnPage: number
}

interface QuickSearchTerm {
    readonly key: 'react' | 'typescript' | 'ai'
    readonly query: string
}

const quickSearchTerms: QuickSearchTerm[] = [
    {
        key: 'react',
        query: 'React',
    },
    {
        key: 'typescript',
        query: 'TypeScript',
    },
    {
        key: 'ai',
        query: 'AI',
    },
]

const CVSearch: FC<CVSearchProps> = ({
    numberPages,
    currentPage,
    setCurrentPage,
    searchText,
    setSearchText,
    matches,
    setMatches,
    currentMatchIndex,
    setCurrentMatchIndex,
}) => {
    const { t } = useTranslation('cv')

    const handleNextMatch = (): void => {
        if (matches.length === 0) {
            return
        }

        const nextIndex = (currentMatchIndex + 1) % matches.length

        setCurrentMatchIndex(nextIndex)

        const match = matches[nextIndex]

        if (currentPage !== match.pageNum) {
            setCurrentPage(match.pageNum)
        }
    }

    const handlePreviousMatch = (): void => {
        if (matches.length === 0) {
            return
        }

        const previousIndex = (currentMatchIndex - 1 + matches.length) % matches.length

        setCurrentMatchIndex(previousIndex)

        const match = matches[previousIndex]

        if (currentPage !== match.pageNum) {
            setCurrentPage(match.pageNum)
        }
    }

    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    md: 340,
                },
                flexShrink: 0,
                maxHeight: '100%',
                overflow: 'auto',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignSelf: {
                    xs: 'stretch',
                    md: 'flex-start',
                },
            }}
        >
            <Box>
                <Typography variant="h6" gutterBottom>
                    {t('viewer.search.title')}
                </Typography>
                <TextField
                    placeholder={t('viewer.search.placeholder')}
                    value={searchText}
                    onChange={(event_: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchText(event_.target.value)

                        pdfTextSearch({
                            query: event_.target.value,
                            numberPages,
                        })
                    }}
                    size="small"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <Search
                                sx={{
                                    mr: 1,
                                }}
                            />
                        ),
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        mt: 1.5,
                    }}
                >
                    {t('viewer.search.description')}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                }}
            >
                {quickSearchTerms.map((term) => (
                    <Chip
                        key={term.key}
                        label={t(`viewer.quickSearch.${term.key}`)}
                        clickable
                        color={searchText === term.query ? 'primary' : 'default'}
                        onClick={() => {
                            setSearchText(term.query)

                            pdfTextSearch({
                                query: term.query,
                                numberPages,
                            })
                        }}
                        variant={searchText === term.query ? 'filled' : 'outlined'}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    size="small"
                    startIcon={<NavigateBefore />}
                    onClick={handlePreviousMatch}
                    disabled={matches.length === 0}
                >
                    {t('viewer.actions.previous')}
                </Button>
                <Button
                    size="small"
                    endIcon={<NavigateNext />}
                    onClick={handleNextMatch}
                    disabled={matches.length === 0}
                >
                    {t('viewer.actions.next')}
                </Button>
                <Button
                    size="small"
                    startIcon={<Clear />}
                    onClick={() => {
                        setSearchText('')

                        setMatches([])

                        setCurrentMatchIndex(-1)
                    }}
                    color="primary"
                >
                    {t('viewer.actions.clear')}
                </Button>
            </Box>
        </Box>
    )
}

export default CVSearch
