import { createStore } from 'redux'
import { IAction, IStrategyReducer } from './store.interface'
import * as StoreType from './store.type'

function spliceBuyList<T>(array: T[], price: T): T[] {
    const tmp = array.slice()
    tmp.splice(0, 1)
    tmp.push(price)
    return tmp
}

const initialState: IStrategyReducer = {
    buyList: [],
    currentAction: 'LISTENING',
    sellMin: null,
    sellMax: null,
}
function strategyReducer(
    state: IStrategyReducer = initialState,
    action: IAction
) {
    switch (action.type) {
        case StoreType.SET_CURRENT_ACTION:
            return {
                ...state,
                currentAction: action.payload.currentAction,
            }
        case StoreType.PUSH_TO_BUY_LIST:
            return {
                ...state,
                buyList: [...state.buyList, action.payload.price],
            }
        case StoreType.SPLICE_BUY_LIST:
            return {
                ...state,
                buyList: spliceBuyList(state.buyList, action.payload.price),
            }
        case StoreType.RESET_BUY_LIST:
            return {
                ...state,
                buyList: [action.payload.price],
            }
        case StoreType.SET_SELL_MAX:
            return {
                ...state,
                sellMax: action.payload.max,
            }
        case StoreType.SET_SELL_MIN:
            return {
                ...state,
                sellMin: action.payload.min,
            }
        case StoreType.RESET:
            return initialState
        default:
            return state
    }
}

const store = createStore(strategyReducer)

export default store
