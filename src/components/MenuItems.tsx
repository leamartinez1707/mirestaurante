import { OrderActions } from "../reducers/order-reducers"
import type { MenuItem } from "../types"
import { Dispatch } from "react"

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}


export const MenuItems = ({ item, dispatch }: MenuItemProps) => {
  return (
    <>
      <button
        className="border-2 border-rose-300 hover:bg-rose-200 w-full p-3 flex justify-between"
        onClick={() => dispatch({ type: 'add-item', payload: { item } })}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  )
}

