import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}


export const MenuItems = ({ item, addItem }: MenuItemProps) => {
  return (
    <>
      <button
        className="border-2 border-rose-300 hover:bg-rose-200 w-full p-3 flex justify-between"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  )
}

