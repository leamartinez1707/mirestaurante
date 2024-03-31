import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updateOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const deleteItem = (id: MenuItem['id']) => {
        setOrder(order.filter(orderItem => orderItem.id !== id))
    }
    const saveOrder = () => {
        setOrder([])
        setTip(0)
        console.log('guardando orden..')
    }
    return {
        order,
        tip,
        setTip,
        addItem,
        deleteItem,
        saveOrder
    }
}