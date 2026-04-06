interface HighlightRect {
    left: number
    top: number
    width: number
    height: number
    occurrenceOnPage: number
}

interface TextLayerBounds {
    left: number
    top: number
    width: number
    height: number
}

interface UpdateHighlightRectsParams {
    pageElement: HTMLDivElement | null
    query: string
}

interface UpdateHighlightRectsResult {
    highlightRects: HighlightRect[]
    textLayerBounds?: TextLayerBounds | null
}

const escapeRegExp = (value: string): string => value.replaceAll(/[$()*+.?[\\\]^{|}]/g, String.raw`\$&`)

const updateHighlightRects = ({ pageElement, query }: UpdateHighlightRectsParams): UpdateHighlightRectsResult => {
    const trimmedQuery = query.trim()

    if (!pageElement || !trimmedQuery) {
        return {
            highlightRects: [],
        }
    }

    const textLayer = pageElement.querySelector('.react-pdf__Page__textContent')

    if (!(textLayer instanceof HTMLElement)) {
        return {
            highlightRects: [],
            textLayerBounds: null,
        }
    }

    const pageRect = pageElement.getBoundingClientRect()

    const textLayerRect = textLayer.getBoundingClientRect()

    const textLayerBounds: TextLayerBounds = {
        left: textLayerRect.left - pageRect.left,
        top: textLayerRect.top - pageRect.top,
        width: textLayerRect.width,
        height: textLayerRect.height,
    }

    const queryPattern = new RegExp(escapeRegExp(trimmedQuery), 'gi')

    const walker = document.createTreeWalker(textLayer, NodeFilter.SHOW_TEXT)

    const highlightRects: HighlightRect[] = []

    let occurrenceOnPage = 0

    for (let textNode = walker.nextNode(); textNode; textNode = walker.nextNode()) {
        if (!(textNode instanceof Text)) {
            continue
        }

        const value = textNode.nodeValue ?? ''

        if (!value.trim()) {
            continue
        }

        queryPattern.lastIndex = 0

        for (let match = queryPattern.exec(value); match; match = queryPattern.exec(value)) {
            occurrenceOnPage += 1

            const range = document.createRange()

            range.setStart(textNode, match.index)

            range.setEnd(textNode, match.index + match[0].length)

            const clientRects = [...range.getClientRects()]

            for (const rect of clientRects) {
                highlightRects.push({
                    left: rect.left - textLayerRect.left,
                    top: rect.top - textLayerRect.top,
                    width: rect.width,
                    height: rect.height,
                    occurrenceOnPage,
                })
            }

            range.detach()
        }
    }

    return {
        highlightRects,
        textLayerBounds,
    }
}

export { type HighlightRect, type TextLayerBounds, updateHighlightRects }
