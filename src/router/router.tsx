import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import MenuView from "../pages/MenuView"
import Filter from "../components/Filters/Filter"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MenuView />} index />
          <Route path="/food/list" element={<Filter />} />
          <Route path="/tables" element={<p>Mesas</p>} />
          <Route path="*" element={<h1 className="text-4xl mx-auto text-center mt-40">Página no encontrada..</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}