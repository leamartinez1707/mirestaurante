import { createContext, useReducer, ReactNode, Dispatch, FC, useEffect } from 'react';
import { OrderState, OrderActions, orderReducer, initialState } from '../reducers/order-reducers';

// Define el tipo del contexto
type OrderContextType = {
    state: OrderState;
    dispatch: Dispatch<OrderActions>;
};

// Crea el contexto
export const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Proveedor del contexto
type OrderProviderProps = {
    children: ReactNode;
};

export const OrderProvider: FC<OrderProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(orderReducer, initialState);



    // Sincroniza localStorage con las órdenes del estado
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(state.orders));
    }, [state.orders]);

    return (
        <OrderContext.Provider value={{ state, dispatch }}>
            {children}
        </OrderContext.Provider>
    );
};
