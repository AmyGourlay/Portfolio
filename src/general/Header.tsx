import {
    FunctionComponent,
    useId,
} from 'react'

import isPropValid from '@emotion/is-prop-valid'
import { AppBar, Box, Button, Drawer, Slide, Stack, styled, Typography } from '@mui/material'
import { bindPopover, usePopupState } from 'material-ui-popup-state/hooks'
import Link from 'next/link'
import { useResizeDetector } from 'react-resize-detector'

import AppName from 'src/general/AppName'
import Icon from 'src/general/Icon'
import { GeneralConfig, Spacing } from 'src/general/utils/config'
import { theme } from 'src/theme/theme.default'

interface MenuOptions {
    slug?: string
    displayName?: string
}

interface HeaderProps {
    disableStickyShadow?: boolean
    order?: number
    menuOptions?: MenuOptions[]
    color?: string
    isDarkMode?: boolean
}

interface HeaderRootProps {
    order: number
}

const HeaderRoot = styled(AppBar, {
    name: 'HeaderRoot',
    shouldForwardProp: isPropValid,
})<HeaderRootProps>(({ order }) => ({
    boxShadow: theme.shadows[2],
    height: theme.spacing(GeneralConfig.ToolbarHeight),
    backgroundColor: 'rgba(255, 255, 255, 0.6) !important',
    backdropFilter: 'saturate(180%) blur(20px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    padding: theme.spacing(0, Spacing.Header),
    top: theme.spacing(GeneralConfig.ToolbarHeight * order),
    zIndex: theme.zIndex.tooltip,
    backfaceVisibility: 'hidden',
}))

const DrawerHeader = styled('div', {
    name: 'DrawerHeader',
})(() => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2.5, 1),
}))

const Header: FunctionComponent<HeaderProps> = ({ order = 0 }) => {
    const { width, ref } = useResizeDetector()

    const sm = width && width < theme.breakpoints.values.md

    const md = width && width < theme.breakpoints.values.lg

    const menuOptions = [
        { displayName: "CV", slug: "cv"}, 
        { displayName: "Next", slug: "projects/next"}, 
        { displayName: "Shopify", slug: "projects/shopify"}
    ]

    const drawerPopupState = usePopupState({
        popupId: useId(),
        variant: 'dialog',
    })

    return (
        <Box component="div">
            <div ref={ref}>
                <HeaderRoot order={order}>
                    <Box
                        component="div"
                        display="grid"
                        gap={Spacing.Header}
                        gridTemplateColumns="max-content 1fr max-content"
                        alignItems="center"
                        width={1}
                    >
                        {md ? (
                            <>
                                <Button
                                    variant="text"
                                    onClick={drawerPopupState.open}
                                    sx={{
                                        padding: '0 !important',
                                    }}
                                >
                                    <Icon
                                        name="menu"
                                        sx={{
                                            color: theme.palette.text.primary,
                                        }}
                                    />
                                </Button>
                                <Drawer
                                    anchor="top"
                                    transitionDuration={500}
                                    {...bindPopover(drawerPopupState)}
                                    PaperProps={{
                                        sx: {
                                            boxShadow: 'none',
                                            height: '100%',
                                            width: sm ? '100%' : '40%',
                                        },
                                    }}
                                    sx={{
                                        zIndex: 5000,
                                    }}
                                >
                                    <DrawerHeader>
                                        <Button
                                            onClick={drawerPopupState.close}
                                            sx={{
                                                padding: '0 26px !important',
                                            }}
                                        >
                                            <Icon color={theme.palette.text.primary} name="close" />
                                        </Button>
                                        <Link
                                            href="/home"
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <AppName />
                                        </Link>
                                    </DrawerHeader>
                                    <Slide
                                        direction="down"
                                        in={drawerPopupState.isOpen}
                                        mountOnEnter
                                        unmountOnExit
                                        timeout={{
                                            enter: 1500,
                                            exit: 300,
                                        }}
                                    >
                                        <Box
                                            component="div"
                                            m={3}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            {menuOptions?.map((option) => (
                                                <Link
                                                    href={`/work/${option.slug}`}
                                                    onClick={drawerPopupState.close}
                                                    key={option.displayName}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        textDecoration: 'none',
                                                        paddingBottom: '30px',
                                                    }}
                                                >
                                                    <Typography variant="h4" color={theme.palette.text.primary}>
                                                        {option.displayName}
                                                    </Typography>
                                                </Link>
                                            ))}
                                        </Box>
                                    </Slide>
                                </Drawer>
                                <Stack spacing={Spacing.Header} direction="row" alignItems="center">
                                    <Link
                                        href="/home"
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <AppName />
                                    </Link>
                                </Stack>
                            </>
                        ) : null}
                        {!md ? (
                            <>
                                <Stack spacing={Spacing.Header} direction="row" alignItems="center">
                                    <Link
                                        href="/home"
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <AppName />
                                    </Link>
                                </Stack>
                                {/* Empty <div> required so that the last section of the grid for
                                location and account can align itself to the right */}
                                <div />
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    {menuOptions?.map((option) => (
                                        <Link
                                            key={option.displayName}
                                            href={`/${option.slug}`}
                                            onClick={drawerPopupState.close}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingRight: '30px',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                color={theme.palette.text.primary}
                                            >
                                                {option.displayName}
                                            </Typography>
                                        </Link>
                                    ))}
                                </Box>
                            </>
                        ) : null}
                    </Box>
                </HeaderRoot>
            </div>
        </Box>
    )
}

export type { HeaderProps }

export { Header }
