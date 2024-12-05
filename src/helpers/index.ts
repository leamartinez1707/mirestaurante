export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}


export const generateUniqueOrderId = (): number => {
    const timestamp = Date.now().toString().slice(-7);  // Tomamos los últimos 7 dígitos del timestamp
    const random = Math.floor(Math.random() * 1000);  // Generamos un número aleatorio de 3 dígitos
    return parseInt(`${timestamp}${random}`);  // Concatenamos el timestamp con el valor aleatorio
};
