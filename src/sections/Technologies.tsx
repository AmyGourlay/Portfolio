import { FunctionComponent, useRef } from 'react'

import { Box, Typography, Unstable_Grid2, } from '@mui/material'
import Image from 'next/image'
import reactImage from 'assets/react.png'
import tsImage from 'assets/typescript.png'
import jsImage from 'assets/js.png'
import nextImage from 'assets/next.png'
import nodeImage from 'assets/node-js.png'
import Section from 'src/general/Section'
import { useTranslation } from 'react-i18next'
import { motion, Variants } from 'framer-motion'

/**
 * Technologies section.
 */
const Technologies: FunctionComponent = () => {
    const { t } = useTranslation()

    const scrollRef = useRef(null)

    const cardVariants: Variants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{
                once: true,
                amount: 0.5,
            }}
            ref={scrollRef}
        >
            <Section maxWidth="xl" backgroundColor='#fff'>
                <Typography mb={6} variant="h2">{t('home:technologies.title')}</Typography>
                <Unstable_Grid2 container spacing={{ xs: 3, lg: 6 }}>
                    <Unstable_Grid2 xs={12} sm={6} lg={4}>
                        <motion.li
                            style={{
                                listStyleType: 'none',
                                margin: '10px',
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'
                            }}
                            variants={cardVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.05,
                            }}
                        >
                            <Box sx={{ width: 'auto', height: '250px' }}>
                                <Image
                                    alt="react" 
                                    src={reactImage.src}
                                    width={reactImage.width}
                                    height={reactImage.height}
                                    style={{
                                        maxHeight:'100%',
                                        height: 'auto',
                                        width: 'auto'
                                    }}
                                />
                            </Box>
                            <Typography mt={2} variant="h2">{t('home:technologies.react')}</Typography>
                        </motion.li>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.li
                            style={{
                                listStyleType: 'none',
                                margin: '10px',
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'
                            }}
                            variants={cardVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                        >
                            <Box sx={{ width: 'auto', height: '250px' }}>
                                <Image 
                                    alt="ts" 
                                    src={tsImage.src} 
                                    width={tsImage.width}
                                    height={tsImage.height}
                                    style={{
                                        maxHeight:'100%',
                                        height: 'auto',
                                        width: 'auto'
                                    }}
                                />
                            </Box>
                            <Typography mt={2} variant="h2">{t('home:technologies.typescript')}</Typography>
                        </motion.li>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.li
                            style={{
                                listStyleType: 'none',
                                margin: '10px',
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'
                            }}
                            variants={cardVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.15,
                            }}
                        >
                            <Box sx={{ width: 'auto', height: '250px' }}>
                                <Image 
                                    alt="next" 
                                    src={nextImage.src} 
                                    width={nextImage.width}
                                    height={nextImage.height}
                                    style={{
                                        maxHeight:'100%',
                                        height: 'auto',
                                        width: 'auto',
                                        mixBlendMode: 'normal'
                                    }} 
                                />
                            </Box>
                            <Typography mt={2} variant="h2">{t('home:technologies.next')}</Typography>
                        </motion.li>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={6} lg={4} lgOffset={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.li
                            style={{
                                listStyleType: 'none',
                                margin: '10px',
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'
                            }}
                            variants={cardVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                        >
                            <Box sx={{ width: 'auto', height: '250px' }}>
                                <Image 
                                    alt="js" 
                                    src={jsImage.src} 
                                    width={jsImage.width}
                                    height={jsImage.height}
                                    style={{
                                        maxHeight:'100%',
                                        height: 'auto',
                                        width: 'auto'
                                    }}
                                />
                            </Box>
                            <Typography mt={2} variant="h2">{t('home:technologies.javascript')}</Typography>
                        </motion.li>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={6} lg={4} smOffset={3} lgOffset={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.li
                            style={{
                                listStyleType: 'none',
                                margin: '10px',
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center'
                            }}
                            variants={cardVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.25,
                            }}
                        >
                            <Box sx={{ width: 'auto', height: '250px' }}>
                                <Image 
                                    alt="node" 
                                    src={nodeImage.src} 
                                    width={nodeImage.width}
                                    height={nodeImage.height}
                                    style={{
                                        maxHeight:'100%',
                                        height: 'auto',
                                        width: 'auto'
                                    }} 
                                />
                            </Box>
                            <Typography mt={2} variant="h2">{t('home:technologies.node')}</Typography>
                        </motion.li>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </Section>
        </motion.div>
    )
}

export default Technologies
