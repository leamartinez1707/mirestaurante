export type MenuItem = {
    id: number,
    name: string,
    price: number
}


export type OrderItem = MenuItem & {
    quantity: number

}

// Tipo para cada comida
export type Food = {
    id: number; // Identificador único
    name: string; // Nombre del plato
    description: string; // Descripción del plato
    price: number; // Precio
    category: "Entrada" | "Plato principal" | "Postre" | "Bebida"; // Categoría del plato
    image: string; // URL de la imagen
    availability: boolean; // Disponibilidad del plato
    ingredients: string[]; // Lista de ingredientes
    isVegetarian?: boolean; // Indica si es vegetariano (opcional)
    isVegan?: boolean; // Indica si es vegano (opcional)
    isGlutenFree?: boolean; // Indica si es libre de gluten (opcional)
    calories?: number; // Cantidad de calorías (opcional)
    spicyLevel?: 0 | 1 | 2 | 3 | 4 | 5; // Nivel de picante (opcional)
    preparationTime?: number; // Tiempo de preparación en minutos (opcional)
    rating?: number; // Calificación promedio (opcional)
};

// Tipo para la lista de comidas (base de datos simulada)
export type FoodDatabase = Food[];

export type GroupedFood = Record<Food["category"], Food[]>;



