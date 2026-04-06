'use client'

import { FC, useCallback, useEffect, useRef, useState } from 'react'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Document, Page, pdfjs } from 'react-pdf'

import CVSearch from './CVSearch'
import { withBasePath } from '@/utils/basePath'
import { centerActiveMatch } from '@/utils/centerActiveMatch'
import { type HighlightRect, type TextLayerBounds, updateHighlightRects } from '@/utils/updateHighlightRects'

pdfjs.GlobalWorkerOptions.workerSrc = withBasePath('/pdf.worker.min.mjs')

type LoadedPdfDocument = {
    numPages: number
    getPage: (pageNumber: number) => Promise<{
        getTextContent: () => Promise<{
            items: unknown[]
        }>
    }>
}

interface CVViewerProps {
    readonly pdfPath: string
}

interface SearchMatch {
    pageNum: number
    occurrenceOnPage: number
}

const CVViewer: FC<CVViewerProps> = ({ pdfPath }) => {
    const { t } = useTranslation('cv')

    const containerRef = useRef<HTMLDivElement>(null)

    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const pageRef = useRef<HTMLDivElement | null>(null)

    const [numberPages, setNumberPages] = useState<number>(0)

    const [currentPage, setCurrentPage] = useState<number>(1)

    const [searchText, setSearchText] = useState<string>('')

    const [matches, setMatches] = useState<SearchMatch[]>([])

    const [currentMatchIndex, setCurrentMatchIndex] = useState<number>(-1)

    const [highlightRects, setHighlightRects] = useState<HighlightRect[]>([])

    const [textLayerBounds, setTextLayerBounds] = useState<TextLayerBounds | null>(null)

    const [error, setError] = useState<string | null>(null)

    const pdfDocumentRef = useRef<LoadedPdfDocument | null>(null)

    const activeMatch = currentMatchIndex >= 0 ? matches[currentMatchIndex] : null

    const activeOccurrenceOnPage = activeMatch?.pageNum === currentPage ? activeMatch.occurrenceOnPage : -1

    const handleUpdateHighlightRects = useCallback(() => {
        const result = updateHighlightRects({
            pageElement: pageRef.current,
            query: searchText,
        })

        if (result.textLayerBounds !== undefined) {
            setTextLayerBounds(result.textLayerBounds)
        }

        setHighlightRects(result.highlightRects)
    }, [searchText])

    useEffect(() => {
        if (currentMatchIndex < 0) {
            return
        }

        const activeMatchController = centerActiveMatch({
            containerRef,
            scrollContainerRef,
            setTimeout_: globalThis.setTimeout,
            clearTimeout_: globalThis.clearTimeout,
        })

        return () => {
            activeMatchController.cancel()
        }
    }, [currentMatchIndex, currentPage, searchText])

    useEffect(() => {
        handleUpdateHighlightRects()
    }, [activeOccurrenceOnPage, currentPage, searchText, handleUpdateHighlightRects])

    const handleDocumentLoadSuccess = (pdfDocument: LoadedPdfDocument) => {
        pdfDocumentRef.current = pdfDocument

        setNumberPages(pdfDocument.numPages)

        if (searchText.trim()) {
            void performSearch(searchText)
        }
    }

    if (error) {
        return (
            <Box
                sx={{
                    p: 3,
                }}
            >
                <Typography color="error">
                    {t('viewer.error.loadingPdfViewer', {
                        error,
                    })}
                </Typography>
            </Box>
        )
    }

    return (
        <Box
            ref={containerRef}
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                height: '100%',
                maxHeight: '100%',
                minHeight: 0,
                overflow: 'hidden',
                bgcolor: 'background.default',
                gap: 2,
                '& .cv-search-highlight': {
                    position: 'absolute',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(255, 235, 59, 0.24)',
                    boxShadow: 'inset 0 -1px 0 rgba(255, 193, 7, 0.18)',
                    pointerEvents: 'none',
                },
                '& .cv-search-highlight--active': {
                    backgroundColor: 'rgba(255, 193, 7, 0.38)',
                    boxShadow: 'inset 0 -1px 0 rgba(255, 152, 0, 0.24)',
                },
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                    minHeight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        minHeight: 0,
                        height: '100%',
                        overflow: 'hidden',
                        p: 2,
                    }}
                >
                    <Box
                        ref={scrollContainerRef}
                        className="cv-pdf-surface"
                        sx={{
                            height: '100%',
                            overflow: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            overscrollBehavior: 'contain',
                        }}
                    >
                        <Document
                            file={pdfPath}
                            onLoadSuccess={handleDocumentLoadSuccess}
                            onLoadError={(error: any) =>
                                setError(
                                    t('viewer.error.pdf', {
                                        error: String(error),
                                    })
                                )
                            }
                            loading={t('viewer.loading')}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <Page
                                    pageNumber={currentPage}
                                    scale={1.4}
                                    inputRef={pageRef}
                                    onRenderTextLayerSuccess={handleUpdateHighlightRects}
                                />
                                {textLayerBounds ? (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: textLayerBounds.left,
                                            top: textLayerBounds.top,
                                            width: textLayerBounds.width,
                                            height: textLayerBounds.height,
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        {highlightRects.map((rect, index) => {
                                            const isActive = rect.occurrenceOnPage === activeOccurrenceOnPage

                                            return (
                                                <Box
                                                    key={`${rect.occurrenceOnPage}-${index}`}
                                                    className={`cv-search-highlight${isActive ? ' cv-search-highlight--active' : ''}`}
                                                    data-search-active={isActive ? 'true' : 'false'}
                                                    sx={{
                                                        left: rect.left,
                                                        top: rect.top,
                                                        width: rect.width,
                                                        height: rect.height,
                                                    }}
                                                />
                                            )
                                        })}
                                    </Box>
                                ) : null}
                            </Box>
                        </Document>
                    </Box>
                </Box>
            </Box>
            <CVSearch
                numberPages={numberPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                searchText={searchText}
                setSearchText={setSearchText}
                matches={matches}
                setMatches={setMatches}
                currentMatchIndex={currentMatchIndex}
                setCurrentMatchIndex={setCurrentMatchIndex}
            />
        </Box>
    )
}

export default CVViewer
