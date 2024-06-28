import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../components/Footer";

export default function Layout() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Navbar />
            <main className={theme}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
