import httpCall, {
    getBaseUrl,
    getApiKey,
    getApiSecret,
    signRequest,
    needSignature,
} from './http'
import { ISignRequestContent } from './http.interface'

test('should return a valide API BASE URL', () => {
    expect(getBaseUrl()).toEqual('https://api.crypto.com/v2')
})

test('should return a valide API PRIVATE KEY', () => {
    expect(getApiKey()).not.toEqual(undefined)
})

test('should return a valide API PRIVATE SECRET', () => {
    expect(getApiSecret()).not.toEqual(undefined)
})

test('should RETURN A VALID HTTP CALL WITH CRYPTO', async () => {
    expect(await httpCall('/public/get-instruments', 'get', {})).toEqual(
        expect.objectContaining({ success: true })
    )
})

test('should RETURN A INVALID HTTP CALL WITH CRYPTO', async () => {
    expect(await httpCall('/public/wrong-uri', 'get', {})).toEqual(
        expect.objectContaining({ success: false, data: {} })
    )
})

test('should RETURN A VALID SIGNED REQUEST', () => {
    const request: ISignRequestContent = {
        id: 11,
        method: 'private/test',
        params: { test: 'mdr' },
    }
    const signedRequest = signRequest(request)
    expect(signedRequest.sig).toBeDefined()
})

test('should need signature function return true', () => {
    const shouldBeTrue = needSignature('/private/test')
    expect(shouldBeTrue).toBe(true)
})

test('should need signature function return false', () => {
    const shouldBeTrue = needSignature('/test/test')
    expect(shouldBeTrue).toBe(false)
})

test('should need signature function return false', () => {
    const shouldBeTrue = needSignature('')
    expect(shouldBeTrue).toBe(false)
})
