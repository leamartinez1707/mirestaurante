import { useReducer } from "react"
import { MenuItems } from "../components/MenuItems"
import { OrderItems } from "../components/OrderItems"
import OrderTotal from "../components/OrderTotal"
import TipForm from "../components/TipForm"
import { menuItems } from "../data/db"
import { initialState, orderReducer } from "../reducers/order-reducers"


const MenuView = () => {

    const [state, dispatch] = useReducer(orderReducer, initialState)


    return (
        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
            <div className="p-5">
                <h2 className="text-4xl font-black">Menú</h2>

                <div className="mt-10 space-y-3">

                    {menuItems.map(item => (
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