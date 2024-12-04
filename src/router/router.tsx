import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import AppLayout from "../layouts/AppLayout";
import { routes } from "./routesConfig";
import Loader from "../components/Loader/Loader";

const MenuView = React.lazy(() => import("../pages/MenuView"));
const FoodView = React.lazy(() => import("../pages/FoodView"));
const FoodDetail = React.lazy(() => import("../components/Food/FoodDetail"));
const OrdersView = React.lazy(() => import("../pages/OrdersView"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

// Mapeo de rutas
const routesMap = [
  { path: routes.home, element: <MenuView />, index: true },
  { path: routes.foodList, element: <FoodView /> },
  { path: routes.foodDetail, element: <FoodDetail /> },
  { path: routes.orders, element: <OrdersView /> },
  { path: routes.tables, element: <NotFound /> },
  { path: routes.notFound, element: <NotFound /> },
];

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AppLayout />}>
            {routesMap.map(({ path, element, index }) => (
              <Route key={path} path={path} element={element} index={index} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}