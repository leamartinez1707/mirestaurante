import { Food, GroupedFood } from "../../types";


type FoodListProps = {
    groupedFood: GroupedFood;
}
const FoodList = ({ groupedFood }: FoodListProps) => {
    if (!groupedFood || Object.keys(groupedFood).length === 0) {
        return <p>No hay datos para mostrar.</p>;
    }
    return (
        <div>
            {Object.keys(groupedFood).map((category) => (
                <div key={category}>
                    <ul role="list" className="divide-y divide-gray-100">
                        <h2 className="text-2xl/7 font-normal text-gray-500 sm:truncate sm:text-xl sm:tracking-tight my-4">{category}</h2>
                        {groupedFood[category as Food["category"]]?.map((item) => (
                            <li key={item.id} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img
                                        alt={item.name}
                                        src={`/food/${item.image}`}
                                        className="size-16 flex-none rounded-full bg-gray-50"
                                    />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                                        <p className="mt-1 truncate text-xs text-gray-500">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm text-gray-900">{item.category}</p>
                                    {item.availability ? (
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                            <p className="text-xs text-gray-500">Disponible</p>
                                        </div>
                                    ) : (
                                        <p className="mt-1 text-xs text-gray-500">No disponible</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default FoodList;