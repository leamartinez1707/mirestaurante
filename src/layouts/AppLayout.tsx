import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"

const AppLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="min-h-lvh max-w-screen-2xl mx-auto">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default AppLayout