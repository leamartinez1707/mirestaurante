import OrdersList from '../components/Orders/OrdersList'
import { useOrderContext } from '../hooks/useGeneralContext';
import { pizzas } from '../data/data.ts'

const OrdersView = () => {

    console.log(pizzas)
    const { state } = useOrderContext()

    return (
        <div>

            <OrdersList orders={state.orders} />

        </div>
    )
}

export default OrdersView