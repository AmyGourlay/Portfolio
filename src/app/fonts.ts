import { Poppins } from 'next/font/google'

// Poppins for headings - stylish and professional
export const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})
