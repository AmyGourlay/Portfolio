interface HighlightEntry {
    id: string
    text: string
    comment: string
    timestamp: Date
    pageNumber: number
    position?: HighlightPosition // Position for rendering highlight overlay
}

interface HighlightPosition {
    x: number
    y: number
    width: number
    height: number
}

export type { HighlightEntry, HighlightPosition }
