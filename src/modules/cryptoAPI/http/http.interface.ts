export interface IHttpResult {
    success: boolean
    data: { [key: string]: any }
}

export interface HttpBody {
    id: number
    method: string
    params: { [key: string]: any }
}

export interface ISignRequestContent extends HttpBody {}
export interface ISignedRequest extends ISignRequestContent {
    sig: string
    api_key: string
    nonce: number
}
