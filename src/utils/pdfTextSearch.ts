interface TextItem {
    str: string
}

interface LoadedPdfDocument {
    numPages: number
    getPage: (pageNumber: number) => Promise<{
        getTextContent: () => Promise<{
            items: unknown[]
        }>
    }>
}

interface SearchMatch {
    pageNum: number
    occurrenceOnPage: number
}

interface PdfTextSearchParams {
    query: string
    numberPages: number
    pdfDocument: LoadedPdfDocument | null
    currentPage: number
}

interface PdfTextSearchResult {
    matches: SearchMatch[]
    currentMatchIndex: number
    nextPage: number | null
}

const pdfTextSearch = async ({
    query,
    numberPages,
    pdfDocument,
    currentPage,
}: PdfTextSearchParams): Promise<PdfTextSearchResult> => {
    if (!query.trim() || !pdfDocument) {
        return {
            matches: [],
            currentMatchIndex: -1,
            nextPage: null,
        }
    }

    const newMatches: SearchMatch[] = []

    const queryLower = query.toLowerCase()

    for (let pageNumber = 1; pageNumber <= numberPages; pageNumber++) {
        const page = await pdfDocument.getPage(pageNumber)

        const textContent = await page.getTextContent()

        const items = textContent.items as TextItem[]

        let occurrenceOnPage = 0

        for (const item of items) {
            const itemText = item.str ?? ''

            const itemTextLower = itemText.toLowerCase()

            let searchIndex = 0

            while (searchIndex <= itemTextLower.length - queryLower.length) {
                const foundIndex = itemTextLower.indexOf(queryLower, searchIndex)

                if (foundIndex === -1) {
                    break
                }

                occurrenceOnPage += 1

                newMatches.push({
                    pageNum: pageNumber,
                    occurrenceOnPage,
                })

                searchIndex = foundIndex + queryLower.length
            }
        }
    }

    if (newMatches.length > 0) {
        const firstMatch = newMatches[0]

        return {
            matches: newMatches,
            currentMatchIndex: 0,
            nextPage: currentPage === firstMatch.pageNum ? null : firstMatch.pageNum,
        }
    }

    return {
        matches: newMatches,
        currentMatchIndex: -1,
        nextPage: null,
    }
}

export { type SearchMatch, pdfTextSearch }
