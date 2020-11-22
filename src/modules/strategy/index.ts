import { Currency } from '../cryptoAPI'

export default async function strategy() {
    while (true) {
        const tick = await Currency.getTick('CRO_BTC')
        console.log(tick.b, tick.k, tick.a)
        setTimeout(() => {}, 1000)
    }
}
