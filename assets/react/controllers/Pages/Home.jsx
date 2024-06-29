import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";
import axios from "axios";

export default function Home(props) {
    const { theme } = useContext(ThemeContext);

    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "blabla",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/10/498/200",
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/articles");
            setArticles(data);
        };
        fetchData();
    }, []);

    return (
        <section>
            <h1 className={theme}>Hello Wilders</h1>

            {articles.map((article) => (
                <Card key={article.id} article={article} />
            ))}
        </section>
    );
}
