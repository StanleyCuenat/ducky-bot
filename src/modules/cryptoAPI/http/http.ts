import Axios, { AxiosRequestConfig, Method } from 'axios'
import { IHttpResult } from './http.interface'

export function getBaseUrl() {
    return process.env.CRYPTO_BASE_URL as string
}

export function getApiKey() {
    return process.env.CRYPTO_API_KEY
}

export function getApiSecret() {
    return process.env.CRYPTO_API_SECRET
}

export default async function httpCall(
    url: string,
    method: Method,
    body?: object
) {
    try {
        const config: AxiosRequestConfig = {
            url: `${getBaseUrl()}${url}`,
            method: method,
            data: body || {},
        }
        const httpResult = await Axios(config)
        return { success: true, data: httpResult.data } as IHttpResult
    } catch (e) {
        return { success: false, data: {} } as IHttpResult
    }
}
