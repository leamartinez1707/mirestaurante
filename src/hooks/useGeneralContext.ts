import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

// Hook personalizado para usar el contexto
export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
};