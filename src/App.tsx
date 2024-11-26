import { SnackbarProvider } from "notistack"
import { Router } from "./router/router"

function App() {

  return (
    <>
      <Router />
      <SnackbarProvider autoHideDuration={2000} maxSnack={2} anchorOrigin={{
        vertical: "top", // Posición vertical: "top" o "bottom"
        horizontal: "right", // Posición horizontal: "left", "center" o "right"
      }} />
    </>
  )
}

export default App
