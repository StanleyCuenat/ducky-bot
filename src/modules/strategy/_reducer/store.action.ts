import {
    CurrentAction,
    IActionPushBuyList,
    IActionResetBuyList,
    IActionResetStore,
    IActionSetCurrentAction,
    IActionSetMax,
    IActionSetMin,
    IActionSpliceBuyList,
} from './store.interface'
import {
    PUSH_TO_BUY_LIST,
    RESET,
    RESET_BUY_LIST,
    SET_CURRENT_ACTION,
    SET_SELL_MAX,
    SET_SELL_MIN,
    SPLICE_BUY_LIST,
} from './store.type'

export function setCurrentAction(
    action: CurrentAction
): IActionSetCurrentAction {
    return {
        type: SET_CURRENT_ACTION,
        payload: {
            currentAction: action,
        },
    }
}

export function pushToBuyList(price: number): IActionPushBuyList {
    return {
        type: PUSH_TO_BUY_LIST,
        payload: {
            price: price,
        },
    }
}

export function spliceBuyList(price: number): IActionSpliceBuyList {
    return {
        type: SPLICE_BUY_LIST,
        payload: {
            price: price,
        },
    }
}

export function resetBuyList(price: number): IActionResetBuyList {
    return {
        type: RESET_BUY_LIST,
        payload: {
            price: price,
        },
    }
}

export function setSellMin(price: number): IActionSetMin {
    return {
        type: SET_SELL_MIN,
        payload: {
            min: price,
        },
    }
}

export function setSellMax(price: number): IActionSetMax {
    return {
        type: SET_SELL_MAX,
        payload: {
            max: price,
        },
    }
}

export function resetStore(): IActionResetStore {
    return {
        type: RESET,
        payload: {},
    }
}
