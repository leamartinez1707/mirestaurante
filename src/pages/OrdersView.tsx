import OrdersList from '../components/Orders/OrdersList'
import { useOrderContext } from '../hooks/useGeneralContext';

const OrdersView = () => {

    const { state } = useOrderContext()

    return (
        <div>

            <OrdersList orders={state.orders} />

        </div>
    )
}

export default OrdersView