import httpCall from '../http/http'
import { IInstrument } from './instrument.interface'

export async function getInstrumentList() {
    const result = await httpCall('/public/get-instruments', 'get')
    if (result.success === true) {
        return result.data.result.instruments as IInstrument[]
    }
    return []
}
