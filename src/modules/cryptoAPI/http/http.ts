import Axios, { AxiosRequestConfig, Method } from 'axios'
import {
    HttpBody,
    IHttpResult,
    ISignedRequest,
    ISignRequestContent,
} from './http.interface'
import CryptoJs from 'crypto-js'
export function getBaseUrl() {
    return process.env.CRYPTO_BASE_URL as string
}

export function getApiKey() {
    return process.env.CRYPTO_API_KEY as string
}

export function getApiSecret() {
    return process.env.CRYPTO_API_SECRET as string
}

export function signRequest(signRequest: ISignRequestContent) {
    const { id, method, params } = signRequest
    const nonce = getCurrentTimestamp()
    const secret = getApiSecret()
    const key = getApiKey()
    const paramsString = Object.keys(params)
        .sort()
        .reduce((a, b) => {
            return a + b + params[b]
        }, '')

    const sigPayload = method + id + key + paramsString + nonce
    const signedRequest: ISignedRequest = {
        ...signRequest,
        sig: CryptoJs.HmacSHA256(sigPayload, secret).toString(CryptoJs.enc.Hex),
        nonce: nonce,
        api_key: key,
    }

    return signedRequest
}
export function needSignature(url: string) {
    return url.search('private') !== -1
}

export function getCurrentTimestamp() {
    return new Date().getTime()
}

export default async function httpCall(
    url: string,
    method: Method,
    body?: HttpBody
) {
    try {
        const config: AxiosRequestConfig = {
            url: `${getBaseUrl()}${url}`,
            method: method,
            data: body !== undefined ? signRequest(body) : {},
        }
        const httpResult = await Axios(config)
        return { success: true, data: httpResult.data } as IHttpResult
    } catch (e) {
        return { success: false, data: {} } as IHttpResult
    }
}
