import { MenuItem, OrderItem } from "../types";


export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'save-order', payload: { orderItem: OrderItem, tip: number } } |
    { type: 'add-tip', payload: { value: number } };


export type OrderState = {
    order: OrderItem[],
    tip: number,
    orders: [OrderItem[]] // Modificar esto, para que sea un array, de ordenes que dentro tienen un array de OrderItem
}
export const initialState = {
    order: [],
    tip: 0,
    orders: []
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
        console.log(action.payload)
        const newOrder = action.payload.orderItem
        const tip = action.payload.tip
        const newOrders = [...state.orders, { ...newOrder, tip }]
        return {
            ...state,
            orders: newOrders,
            order: [],
            tip: 0
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