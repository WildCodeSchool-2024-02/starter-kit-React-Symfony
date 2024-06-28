import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [categories, setCategories] = useState([
        { id: 1, name: "truc" },
        { id: 2, name: "truc2" },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            console.log(await axios.get("/api/categories"));
            const { data } = await axios.get("/api/categories");
            setCategories(data);
        };
        fetchData();
    }, []);

    return (
        <header>
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
