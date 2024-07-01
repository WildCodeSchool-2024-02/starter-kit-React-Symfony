import { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    const { theme } = useContext(ThemeContext);

    const [categories, setCategories] = useState([
        { id: 1, name: "Category X" },
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
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <nav>
                <ul>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/categories/${category.id}`}
                        >
                            <li>{category.name}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
