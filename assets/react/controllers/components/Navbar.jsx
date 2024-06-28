import axios from "axios";
import { useEffect, useState, useContext } from "react";
import logo from "../assets/logo.webp";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

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
        <header className={theme === "dark" ? "light" : "dark"}>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <nav>
                <ul>
                    {categories.map((category) => (
                        <Link
                            to={`/categories/${category.id}`}
                            key={category.id}
                        >
                            <li className={theme === "dark" ? "light" : "dark"}>
                                {category.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
