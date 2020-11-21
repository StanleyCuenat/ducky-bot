import { getInstrumentList } from './../../cryptoAPI/instrument/instruments'

export default async function selectedInstrument(instrumentList: string[]) {
    const list = await getInstrumentList()
    return list.filter(
        (el) => instrumentList.indexOf(el.instrument_name) !== -1
    )
}
