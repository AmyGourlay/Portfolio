'use client'

import { FC } from 'react'

import { Search } from '@mui/icons-material'
import { Clear, NavigateBefore, NavigateNext } from '@mui/icons-material'
import { Box, Button, Chip, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { type SearchMatch } from '@/utils/pdfTextSearch'

interface CVSearchProps {
    readonly currentPage: number
    readonly setCurrentPage: (number: number) => void
    readonly searchText: string
    readonly onSearch: (text: string) => void
    readonly onQuickSearch: (text: string) => void
    readonly onClear: () => void
    readonly matches: SearchMatch[]
    readonly currentMatchIndex: number
    readonly setCurrentMatchIndex: (index: number) => void
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
    currentPage,
    setCurrentPage,
    searchText,
    onSearch,
    onQuickSearch,
    onClear,
    matches,
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
                    onChange={(event_) => onSearch(event_.target.value)}
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
                        onClick={() => onQuickSearch(term.query)}
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
                <Button size="small" startIcon={<Clear />} onClick={onClear} color="primary">
                    {t('viewer.actions.clear')}
                </Button>
            </Box>
        </Box>
    )
}

export default CVSearch
