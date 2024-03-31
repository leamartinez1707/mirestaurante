import { formatCurrency } from '../helpers'
import type { MenuItem, OrderItem } from '../types'

type OrderItemsProps = {
    order: OrderItem[],
    deleteItem: (id: MenuItem['id']) => void
}
export const OrderItems = ({ order, deleteItem }: OrderItemsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className='space-y-3 mt-10'>
                {order.map(item => (
                    <div
                        className='flex justify-between items-center'
                        key={item.id}>
                        <div className='p-2 border-b border-gray-200'>
                            <p className='pr-4 font-bold'>{item.name} | {formatCurrency(item.price)}</p>
                            <p className='font-black pr-4'>Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}</p>
                        </div>

                        <button
                            className='size-6 rounded-full border-red-500 bg-red-600 text-white hover:bg-red-900 font-semibold'
                            onClick={() => deleteItem(item.id)}>
                            X
                        </button>
                    </div>
                ))
                }

            </div>
        </div>
    )
}
