import { useEffect } from "react"
import { MenuItems } from "../components/MenuItems"
import { OrderItems } from "../components/OrderItems"
import OrderTotal from "../components/OrderTotal"
import TipForm from "../components/TipForm"
import { foodList } from "../data/db"
import { useOrderContext } from "../hooks/useGeneralContext"


const MenuView = () => {

    const { state, dispatch } = useOrderContext()

    // Sincroniza localStorage con las órdenes del estado
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(state.orders));
    }, [state.orders]);

    return (
        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
            <div className="p-5">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Manejo de órdenes
                    </h1>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <p className="text-gray-500 py-2">Elige la comida que pidieron y la propina recibida para llevar un control de los pedidos.</p>
                    </div>
                </div>

                <div className="mt-10 space-y-3">

                    {foodList.map(item => (
                        <MenuItems key={item.id}
                            item={item}
                            dispatch={dispatch}
                        />
                    ))}
                </div>
            </div>

            <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
                {state.order.length ?
                    (
                        <>
                            <OrderItems
                                order={state.order}
                                dispatch={dispatch}
                            />
                            <TipForm
                                dispatch={dispatch}
                                tip={state.tip}
                            />
                            <OrderTotal
                                order={state.order}
                                tip={state.tip}
                                dispatch={dispatch}
                            />
                        </>
                    ) : <p className='text-center text-lg font-bold'>La orden esta vacia..</p>}
            </div>

        </main>
    )
}

export default MenuView