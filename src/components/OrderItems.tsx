import { formatCurrency } from '../helpers'
import { OrderActions } from '../reducers/order-reducers'
import type { OrderItem } from '../types'

type OrderItemsProps = {
    order: OrderItem[],
    dispatch: React.Dispatch<OrderActions>
}
export const OrderItems = ({ order, dispatch }: OrderItemsProps) => {
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
                            onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })}
                        >x
                        </button>
                    </div>
                ))
                }

            </div>
        </div >
    )
}
