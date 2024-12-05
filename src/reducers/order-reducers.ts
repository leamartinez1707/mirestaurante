import { MenuItem, OrderItem, Orders } from "../types";


export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'save-order', payload: { newOrder: Orders } } |
    { type: 'add-tip', payload: { value: number } } |
    { type: 'remove-order', payload: { id: Orders['id'] } }


export type OrderState = {
    order: OrderItem[],
    tip: number,
    orders: Orders[]
}
export const initialState: OrderState = {
    order: [],
    tip: 0,
    orders: JSON.parse(localStorage.getItem('orders') || '[]')
}

export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {
    if (action.type === 'add-item') {
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let updateOrder: OrderItem[] = []
        if (itemExist) {
            updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
        } else {
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
            updateOrder = [...state.order, newItem]
        }
        return {
            ...state,
            order: updateOrder
        }
    }
    if (action.type === 'remove-item') {
        const order = state.order.filter(orderItem => orderItem.id !== action.payload.id)
        return {
            ...state,
            order
        }
    }
    if (action.type === 'save-order') {
        const newOrder = action.payload.newOrder
        const newOrders = [...state.orders, newOrder]
        return {
            ...state,
            orders: newOrders,
            order: [],
            tip: 0
        }
    }
    if (action.type === 'remove-order') {
        const orders = state.orders.filter(order => order.id !== action.payload.id)
        return {
            ...state,
            orders
        }
    }
    if (action.type === 'add-tip') {
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }
    return state
}