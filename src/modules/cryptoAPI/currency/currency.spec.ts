import { getTick } from './currency'

test('should return a valid tick from CRO_BTC', async () => {
    const tick = await getTick('CRO_BTC')
    expect(typeof tick.i).toEqual('string')
    expect(typeof tick.b).toEqual('number')
    expect(typeof tick.k).toEqual('number')
    expect(typeof tick.a).toEqual('number')
    expect(typeof tick.t).toEqual('number')
    expect(typeof tick.v).toEqual('number')
    expect(typeof tick.h).toEqual('number')
    expect(typeof tick.l).toEqual('number')
    expect(typeof tick.c).toEqual('number')
    expect(tick.i).toEqual('CRO_BTC')
})
