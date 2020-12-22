import { Currency } from '../cryptoAPI'
import { ICurrencyTick } from '../cryptoAPI/currency/currency.interface'
import Store from './_reducer/store'
import * as StoreAction from './_reducer/store.action'

export function handleTicker(tick: ICurrencyTick) {
    const state = Store.getState()
    if (state.buyList.length === 0) {
        return Store.dispatch(StoreAction.pushToBuyList(tick.b))
    }
    if (state.buyList[0] > tick.b) {
        return Store.dispatch(StoreAction.resetBuyList(tick.b))
    }
    if (state.buyList[state.buyList.length - 1] < tick.b) {
        if (state.buyList.length >= 3) {
            return Store.dispatch(StoreAction.spliceBuyList(tick.b))
        }
        return Store.dispatch(StoreAction.pushToBuyList(tick.b))
    }
    return -1
}

export function computeMinValue() {
    const state = Store.getState()
    return state.buyList[state.buyList.length - 1]
}

export function handleBuyToken() {
    const state = Store.getState()
    if (state.currentAction === 'LISTENING' && state.buyList.length >= 3) {
        console.log(`BUY TOKEN FOR ${state.buyList[state.buyList.length - 1]}`)
        Store.dispatch(StoreAction.setCurrentAction('BUYING'))
        computeMinValue()
    }
}

// export function handleSellToken(
//     currentAction: 'LISTENING' | 'BUYING' | 'SELLING'
// ) {}

export default async function strategy() {
    while (true) {
        const tick = await Currency.getTick('XRP_CRO')
        handleTicker(tick)
        handleBuyToken()
        console.log(tick.b, tick.k, tick.a, Store.getState().buyList)
        setTimeout(() => {}, 1000)
    }
}
