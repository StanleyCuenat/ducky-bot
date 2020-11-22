import httpCall from '../http/http'
import { IAccountCrypto } from './account.interface'

export async function getAccountDetail() {
    const _body = {
        id: 11,
        method: 'private/get-account-summary',
        params: {},
    }
    const account = await httpCall(
        '/private/get-account-summary',
        'post',
        _body
    )
    return account.data.result.accounts as IAccountCrypto[]
}
