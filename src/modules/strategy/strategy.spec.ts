import { ICurrencyTick } from '../cryptoAPI/currency/currency.interface'
import { handleTicker, handleBuyToken } from './index'
import store from './_reducer/store'
import * as StoreAction from './_reducer/store.action'

beforeEach(() => {
    store.dispatch(StoreAction.resetStore())
})

test('should PUSH A VALUE', () => {
    const tick: ICurrencyTick = {
        i: 'XRP_CRO',
        b: 6.83,
        k: 6.86,
        a: 6.84,
        t: 1606135550470,
        v: 1041437,
        h: 6.89,
        l: 6.01,
        c: 0.58,
    }
    handleTicker(tick)
    expect(store.getState().buyList).toEqual([6.83])
})

test('should ADD A SECOND VALUE BECAUSE IS BIGGER THAN FIRST', () => {
    store.dispatch(StoreAction.pushToBuyList(6.82))
    const tick: ICurrencyTick = {
        i: 'XRP_CRO',
        b: 6.83,
        k: 6.86,
        a: 6.84,
        t: 1606135550470,
        v: 1041437,
        h: 6.89,
        l: 6.01,
        c: 0.58,
    }
    handleTicker(tick)
    expect(store.getState().buyList).toEqual([6.82, 6.83])
})

test('should ADD A SECOND VALUE BECAUSE IS BIGGER THAN FIRST AND SECOND', () => {
    store.dispatch(StoreAction.pushToBuyList(6.82))
    store.dispatch(StoreAction.pushToBuyList(6.83))
    const tick: ICurrencyTick = {
        i: 'XRP_CRO',
        b: 6.84,
        k: 6.86,
        a: 6.84,
        t: 1606135550470,
        v: 1041437,
        h: 6.89,
        l: 6.01,
        c: 0.58,
    }
    handleTicker(tick)
    expect(store.getState().buyList).toEqual([6.82, 6.83, 6.84])
})

test('should NOT ADD a value because lower than the second one', () => {
    store.dispatch(StoreAction.pushToBuyList(6.82))
    store.dispatch(StoreAction.pushToBuyList(6.83))
    const tick: ICurrencyTick = {
        i: 'XRP_CRO',
        b: 6.82,
        k: 6.86,
        a: 6.84,
        t: 1606135550470,
        v: 1041437,
        h: 6.89,
        l: 6.01,
        c: 0.58,
    }
    handleTicker(tick)
    expect(store.getState().buyList).toEqual([6.82, 6.83])
})

test('should RESET ARRAY because value is lower than first one', () => {
    store.dispatch(StoreAction.pushToBuyList(6.82))
    store.dispatch(StoreAction.pushToBuyList(6.83))
    const tick: ICurrencyTick = {
        i: 'XRP_CRO',
        b: 6.81,
        k: 6.86,
        a: 6.84,
        t: 1606135550470,
        v: 1041437,
        h: 6.89,
        l: 6.01,
        c: 0.58,
    }
    handleTicker(tick)
    expect(store.getState().buyList).toEqual([6.81])
})

test('should REMOVE FIRST ELEM AND PUSH NEW ELEM BECAUSE BETTER THAN LAST ONE AND ARRAY LENGTH = 3', () => {
    store.dispatch(StoreAction.pushToBuyList(6.82))
    store.dispatch(StoreAction.pushToBuyList(6.83))
    store.dispatch(StoreAction.pushToBuyList(6.84))
    const tick: ICurrencyTick = {
        i: 'XRP_CRO',
        b: 6.85,
        k: 6.86,
        a: 6.84,
        t: 1606135550470,
        v: 1041437,
        h: 6.89,
        l: 6.01,
        c: 0.58,
    }
    handleTicker(tick)
    expect(store.getState().buyList).toEqual([6.83, 6.84, 6.85])
})

test('should SET TO BUYING ACTION', () => {
    store.dispatch(StoreAction.pushToBuyList(6.82))
    store.dispatch(StoreAction.pushToBuyList(6.83))
    store.dispatch(StoreAction.pushToBuyList(6.84))

    handleBuyToken()
    expect(store.getState().currentAction).toEqual('BUYING')
})

test('should NOT SET TO BUYING ACTION BECAUSE ARRAY TO LITTLE', () => {
    store.dispatch(StoreAction.pushToBuyList(6.82))
    store.dispatch(StoreAction.pushToBuyList(6.83))
    handleBuyToken()
    expect(store.getState().currentAction).toEqual('LISTENING')
})
