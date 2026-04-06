import { ReactNode } from 'react'

import { NextApiRequest, NextPage } from 'next'

type NextPageWithLayout<TProps = unknown> = NextPage<TProps> & {
    getLayout?: (page: ReactNode, pageProps: TProps) => ReactNode
}

type QueryParamValue = string | string[] | string

type QueryParams = Record<string, QueryParamValue> | QueryParamValue

type NextApiRequestWithQueryParams<T extends QueryParams> = NextApiRequest & {
    query: T
}

interface NextRouterEventHandler {
    (url: string, params: NextRouterEventHandlerParams): void
}

interface NextRouterEventHandlerParams {
    shallow: true
}

export type { NextApiRequestWithQueryParams, NextPageWithLayout, NextRouterEventHandler, NextRouterEventHandlerParams }
