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
            <h2 className="font-bold text-4xl">Consumo</h2>
            <div className='space-y-3 mt-10'>
                {order.map(item => (
                    <div
                        className='flex justify-between items-center'
                        key={item.id}>
                        <div className='p-2 border-b border-gray-200'>
                            <p className='pr-4 font-semibold'>{item.name} | Precio: {formatCurrency(item.price)}</p>
                            <p className='font-normal pr-4'>Cantidad: {item.quantity} - Total: {formatCurrency(item.quantity * item.price)}</p>
                        </div>

                        <button
                            className='size-6 rounded-full text-red-500 hover:bg-red-200 hover:animate-spin duration-200 transition-colors font-semibold'
                            onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>
                ))
                }
            </div>
        </div >
    )
}
