interface CenterActiveMatchParams {
    containerRef: React.RefObject<HTMLDivElement | null>
    scrollContainerRef: React.RefObject<HTMLDivElement | null>
    setTimeout_: typeof globalThis.setTimeout
    clearTimeout_: typeof globalThis.clearTimeout
}

interface CenterActiveMatchControl {
    cancel: () => void
}

const centerActiveMatch = ({
    containerRef,
    scrollContainerRef,
    setTimeout_,
    clearTimeout_,
}: CenterActiveMatchParams): CenterActiveMatchControl => {
    let cancelled = false

    let timeoutId: number | null = null

    const run = (attemptsRemaining: number): void => {
        if (cancelled) {
            return
        }

        const activeHighlight = containerRef.current?.querySelector('[data-search-active="true"]')

        const scrollContainer = scrollContainerRef.current

        if (activeHighlight instanceof HTMLElement && scrollContainer instanceof HTMLElement) {
            const containerRect = scrollContainer.getBoundingClientRect()

            const matchRect = activeHighlight.getBoundingClientRect()

            const nextTop =
                scrollContainer.scrollTop +
                (matchRect.top - containerRect.top) -
                containerRect.height / 2 +
                matchRect.height / 2

            const nextLeft =
                scrollContainer.scrollLeft +
                (matchRect.left - containerRect.left) -
                containerRect.width / 2 +
                matchRect.width / 2

            scrollContainer.scrollTo({
                top: Math.max(0, nextTop),
                left: Math.max(0, nextLeft),
                behavior: 'smooth',
            })

            return
        }

        if (attemptsRemaining > 0) {
            timeoutId = setTimeout_(() => run(attemptsRemaining - 1), 80)
        }
    }

    run(8)

    return {
        cancel: (): void => {
            cancelled = true

            if (timeoutId !== null) {
                clearTimeout_(timeoutId)
            }
        },
    }
}

export { centerActiveMatch }
