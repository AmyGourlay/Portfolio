import { FunctionComponent, useRef } from 'react'

import { Box, Typography } from '@mui/material'
import js from 'assets/js.png'
import next from 'assets/next.png'
import nodeJs from 'assets/node-js.png'
import react from 'assets/react.png'
import typescript from 'assets/typescript.png'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import Section from '@/general/Section'

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
            <Section maxWidth="xl" backgroundColor="#fff">
                <Typography mb={6} variant="h2">
                    {t('home:technologies.title')}
                </Typography>
                <Box m={2}>
                    <motion.li
                        variants={cardVariants}
                        transition={{
                            duration: 0.5,
                            delay: 0.05,
                        }}
                    >
                        <Box
                            sx={{
                                width: 'auto',
                                height: '250px',
                            }}
                        >
                            <Image
                                alt="react"
                                src={react.src}
                                width={react.width}
                                height={react.height}
                                style={{
                                    maxHeight: '100%',
                                    height: 'auto',
                                    width: 'auto',
                                }}
                            />
                        </Box>
                        <Typography mt={2} variant="h2">
                            {t('home:technologies.react')}
                        </Typography>
                    </motion.li>
                    <motion.li
                        variants={cardVariants}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        <Box
                            sx={{
                                width: 'auto',
                                height: '250px',
                            }}
                        >
                            <Image
                                alt="ts"
                                src={typescript.src}
                                width={typescript.width}
                                height={typescript.height}
                                style={{
                                    maxHeight: '100%',
                                    height: 'auto',
                                    width: 'auto',
                                }}
                            />
                        </Box>
                        <Typography mt={2} variant="h2">
                            {t('home:technologies.typescript')}
                        </Typography>
                    </motion.li>
                    <motion.li
                        variants={cardVariants}
                        transition={{
                            duration: 0.5,
                            delay: 0.15,
                        }}
                    >
                        <Box
                            sx={{
                                width: 'auto',
                                height: '250px',
                            }}
                        >
                            <Image
                                alt="next"
                                src={next.src}
                                width={next.width}
                                height={next.height}
                                style={{
                                    maxHeight: '100%',
                                    height: 'auto',
                                    width: 'auto',
                                    mixBlendMode: 'normal',
                                }}
                            />
                        </Box>
                        <Typography mt={2} variant="h2">
                            {t('home:technologies.next')}
                        </Typography>
                    </motion.li>
                    <motion.li
                        variants={cardVariants}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                        }}
                    >
                        <Box
                            sx={{
                                width: 'auto',
                                height: '250px',
                            }}
                        >
                            <Image
                                alt="js"
                                src={js.src}
                                width={js.width}
                                height={js.height}
                                style={{
                                    maxHeight: '100%',
                                    height: 'auto',
                                    width: 'auto',
                                }}
                            />
                        </Box>
                        <Typography mt={2} variant="h2">
                            {t('home:technologies.javascript')}
                        </Typography>
                    </motion.li>
                    <motion.li
                        variants={cardVariants}
                        transition={{
                            duration: 0.5,
                            delay: 0.25,
                        }}
                    >
                        <Box
                            sx={{
                                width: 'auto',
                                height: '250px',
                            }}
                        >
                            <Image
                                alt="node"
                                src={nodeJs.src}
                                width={nodeJs.width}
                                height={nodeJs.height}
                                style={{
                                    maxHeight: '100%',
                                    height: 'auto',
                                    width: 'auto',
                                }}
                            />
                        </Box>
                        <Typography mt={2} variant="h2">
                            {t('home:technologies.node')}
                        </Typography>
                    </motion.li>
                </Box>
            </Section>
        </motion.div>
    )
}

export default Technologies
