import { getAccountDetail } from './account'

test('should RETURN current account summary', async () => {
    const detail = await getAccountDetail()
    detail.map((cryptoAccount) => {
        expect(typeof cryptoAccount.balance).toEqual('number')
        expect(typeof cryptoAccount.available).toEqual('number')
        expect(typeof cryptoAccount.order).toEqual('number')
        expect(typeof cryptoAccount.stake).toEqual('number')
        expect(typeof cryptoAccount.currency).toEqual('string')
    })
})
