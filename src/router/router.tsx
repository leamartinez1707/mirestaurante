import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import MenuView from "../pages/MenuView"
import FoodView from "../pages/FoodView"
import FoodDetail from "../components/Food/FoodDetail"
import OrdersView from "../pages/OrdersView"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MenuView />} index />

          {/* Food */}
          <Route path="/food/list" element={<FoodView />} />
          <Route path="/food/:id/detail" element={<FoodDetail />} />

          {/* Orders */}
          <Route path="/orders" element={<OrdersView />} />

          {/* Tables */}
          <Route path="/tables" element={<p>Mesas</p>} />
          <Route path="*" element={<h1 className="text-4xl mx-auto text-center mt-40">Página no encontrada..</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}