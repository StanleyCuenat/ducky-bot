import httpCall from '../http/http'
import { ICurrencyTick } from './currency.interface'

export async function getTick(instrumentName: string) {
    const tick = await httpCall('/public/get-ticker', 'get', {
        instrument_name: instrumentName,
    })
    return { i: instrumentName, ...tick.data.result.data } as ICurrencyTick
}
