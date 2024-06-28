import axios from "axios";
import { useEffect, useState, useContext } from "react";
import logo from "../assets/logo.png";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    const { theme } = useContext(ThemeContext);

    const [categories, setCategories] = useState([
        { id: 1, name: "truc" },
        { id: 2, name: "truc2" },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/categories");
            setCategories(data);
        };
        fetchData();
    }, []);

    return (
        <header className={theme}>
            <img src={logo} alt="logo" />

            <nav>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
