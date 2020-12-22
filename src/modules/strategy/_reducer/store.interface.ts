import * as StoreType from './store.type'

export type CurrentAction = 'LISTENING' | 'BUYING' | 'SELLING'

export interface IStrategyReducer {
    currentAction: CurrentAction
    buyList: number[]
    sellMin: number | null
    sellMax: number | null
}

export interface IActionSetCurrentAction {
    type: typeof StoreType.SET_CURRENT_ACTION
    payload: {
        currentAction: CurrentAction
    }
}

export interface IActionPushBuyList {
    type: typeof StoreType.PUSH_TO_BUY_LIST
    payload: {
        price: number
    }
}

export interface IActionSpliceBuyList {
    type: typeof StoreType.SPLICE_BUY_LIST
    payload: {
        price: number
    }
}

export interface IActionResetBuyList {
    type: typeof StoreType.RESET_BUY_LIST
    payload: {
        price: number
    }
}

export interface IActionResetStore {
    type: typeof StoreType.RESET
    payload: {}
}

export interface IActionSetMax {
    type: typeof StoreType.SET_SELL_MAX
    payload: {
        max: number
    }
}

export interface IActionSetMin {
    type: typeof StoreType.SET_SELL_MIN
    payload: {
        min: number
    }
}

export type IAction =
    | IActionSetCurrentAction
    | IActionPushBuyList
    | IActionResetStore
    | IActionSpliceBuyList
    | IActionResetBuyList
    | IActionSetMin
    | IActionSetMax
