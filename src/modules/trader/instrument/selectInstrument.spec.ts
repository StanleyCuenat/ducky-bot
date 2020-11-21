import selectedInstrument from './selectInstrument'

test('should return a VALID list of filtered INSTRUMENT', async () => {
    const instrumentList = await selectedInstrument(['ETH_BTC'])
    expect(instrumentList).toHaveLength(1)
})
