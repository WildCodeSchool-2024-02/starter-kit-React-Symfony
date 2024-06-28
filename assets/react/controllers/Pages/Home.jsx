import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";

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
        {
            id: 2,
            title: "blabla 2",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/237/498/200",
        },
        {
            id: 3,
            title: "blabla 3",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/29/498/200",
        },
        {
            id: 4,
            title: "blabla 4",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/17/498/200",
        },
        {
            id: 5,
            title: "blabla 5",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/119/498/200",
        },
        {
            id: 6,
            title: "blabla 6",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/50/498/200",
        },
        {
            id: 7,
            title: "blabla 7",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/50/498/200",
        },
    ]);

    return (
        <section>
            <h1 className={theme === "light" ? "pink-stripe" : "dark-stripe"}>
                Hello Wilders
            </h1>

            {articles.map((article) => (
                <Card key={article.id} article={article} />
            ))}
        </section>
    );
}
