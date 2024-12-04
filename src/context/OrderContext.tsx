import { createContext, useReducer, ReactNode, Dispatch, FC } from 'react';
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

    return (
        <OrderContext.Provider value={{ state, dispatch }}>
            {children}
        </OrderContext.Provider>
    );
};
