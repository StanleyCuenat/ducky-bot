import store from './store'
import * as StoreAction from './store.action'

beforeEach(() => {
    store.dispatch(StoreAction.resetStore())
})

test('should BE A VALID REDUX STORE', () => {
    expect(store.getState()).toEqual({
        buyList: [],
        currentAction: 'LISTENING',
        sellMin: null,
        sellMax: null,
    })
})

test('should RESET THE STORE', () => {
    store.dispatch(StoreAction.pushToBuyList(42))
    store.dispatch(StoreAction.resetStore())
    expect(store.getState()).toEqual({
        buyList: [],
        currentAction: 'LISTENING',
        sellMin: null,
        sellMax: null,
    })
})

test('should BE A COMPLETE REDUX STORE', () => {
    store.dispatch(StoreAction.setCurrentAction('BUYING'))
    expect(store.getState()).toEqual({
        buyList: [],
        currentAction: 'BUYING',
        sellMin: null,
        sellMax: null,
    })
})

test('should PUSH A PRICE INTO BUYLIST', () => {
    store.dispatch(StoreAction.pushToBuyList(42))
    expect(store.getState().buyList).toEqual([42])
})

test('SHOULD SPLICE BUY LIST', () => {
    store.dispatch(StoreAction.pushToBuyList(42))
    store.dispatch(StoreAction.pushToBuyList(43))
    store.dispatch(StoreAction.pushToBuyList(44))
    store.dispatch(StoreAction.spliceBuyList(45))
    expect(store.getState().buyList).toEqual([43, 44, 45])
})

test('SHOULD RESET BUY LIST', () => {
    store.dispatch(StoreAction.pushToBuyList(42))
    store.dispatch(StoreAction.pushToBuyList(43))
    store.dispatch(StoreAction.pushToBuyList(44))
    store.dispatch(StoreAction.resetBuyList(45))
    expect(store.getState().buyList).toEqual([45])
})

test('SHOULD SET SELL MAX', () => {
    store.dispatch(StoreAction.setSellMax(42))
    expect(store.getState().sellMax).toEqual(42)
})

test('SHOULD SET SELL MIN', () => {
    store.dispatch(StoreAction.setSellMin(39))
    expect(store.getState().sellMin).toEqual(39)
})
