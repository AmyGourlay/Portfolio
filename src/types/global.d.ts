declare module '*SVG' {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

    export default content
}

declare module '*.css' {
    const content: { [className: string]: string }
    export default content
}

declare module '*.png'

declare module 'darkmode-js'
