import { useMemo, Dispatch } from "react"
import { OrderItem, Orders } from "../types"
import { formatCurrency, generateUniqueOrderId } from "../helpers"
import { OrderActions } from "../reducers/order-reducers"
import { enqueueSnackbar } from "notistack"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotal({ order, tip, dispatch }: OrderTotalProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const finalTip = useMemo(() => subTotal * tip, [tip, subTotal])
    const total = useMemo(() => subTotal + finalTip, [subTotal, finalTip])
    const date = new Date()

    const finalOrder: Orders = {
        id: generateUniqueOrderId(),
        order,
        tip,
        total,
        status: 'Pendiente',
        customerName: 'Pepe',
        date
    }

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-bold underline text-2xl">Total de los gastos: </h2>

                <p>Subtotal: <span className="font-bold">{formatCurrency(subTotal)}
                </span></p>
                <p>Propina: <span className="font-bold">{formatCurrency(finalTip)}
                </span></p>
                <p>Total a pagar: <span className="font-bold">{formatCurrency(total)}
                </span></p>
            </div>

            <button
                className="w-full bg-black hover:bg-gray-800 duration-250 transition-colors p-3 uppercase text-white fot-semibold mt-8 disabled:opacity-10"
                disabled={total === 0}
                onClick={() => {
                    enqueueSnackbar('Orden guardada', { variant: 'success' })
                    dispatch({ type: 'save-order', payload: { newOrder: finalOrder } })

                }
                }
            >
                Guardar orden
            </button >
        </>
    )
}
