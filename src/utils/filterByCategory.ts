import { foodList } from "../data/db"


export const filterByCategory = (category: string) => {

    const result = foodList.filter((food) => {
        return food.category.toString() === category
    })

    return result
}
