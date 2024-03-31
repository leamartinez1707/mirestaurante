import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    saveOrder: () => void
}

export default function OrderTotal({ order, tip, saveOrder }: OrderTotalProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const finalTip = useMemo(() => subTotal * tip, [tip, subTotal])
    const total = useMemo(() => subTotal + finalTip, [subTotal, finalTip])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Total de los gastos: </h2>

                <p>Subtotal: <span className="font-bold">{formatCurrency(subTotal)}
                </span></p>
                <p>Propina: <span className="font-bold">{formatCurrency(finalTip)}
                </span></p>
                <p>Total a pagar: <span className="font-bold">{formatCurrency(total)}
                </span></p>
            </div>

            <button
                className="w-full bg-black hover:bg-gray-800 p-3 uppercase text-white fot-semibold mt-8 disabled:opacity-10"
                disabled={total === 0}
                onClick={saveOrder}
            >
                Guardar orden
            </button>
        </>
    )
}
