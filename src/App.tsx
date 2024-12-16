import { SnackbarProvider } from "notistack"
import { Router } from "./router/router"
import { OrderProvider } from "./context/OrderContext"

function App() {


  return (
    <OrderProvider>
      <Router />
      <SnackbarProvider autoHideDuration={2000} maxSnack={2} anchorOrigin={{
        vertical: "top", // Posición vertical: "top" o "bottom"
        horizontal: "right", // Posición horizontal: "left", "center" o "right"
      }} />
    </OrderProvider>
  )
}

export default App
