import { getInstrumentList } from './instruments'

test('should return A VALID INSTRUMENTS LIST', async () => {
    expect((await getInstrumentList()).length).not.toEqual(0)
})
