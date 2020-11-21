import httpCall, { getBaseUrl, getApiKey, getApiSecret } from './http'

test('should return a valide API BASE URL', () => {
    expect(getBaseUrl()).toEqual('https://uat-api.3ona.co/v2')
})

test('should return a valide API PRIVATE KEY', () => {
    expect(getApiKey()).not.toEqual(undefined)
})

test('should return a valide API PRIVATE SECRET', () => {
    expect(getApiSecret()).not.toEqual(undefined)
})

test('should RETURN A VALID HTTP CALL WITH CRYPTO', async () => {
    expect(await httpCall('/public/get-instruments', 'get')).toEqual(
        expect.objectContaining({ success: true })
    )
})

test('should RETURN A INVALID HTTP CALL WITH CRYPTO', async () => {
    expect(await httpCall('/public/wrong-uri', 'get')).toEqual(
        expect.objectContaining({ success: false, data: {} })
    )
})
