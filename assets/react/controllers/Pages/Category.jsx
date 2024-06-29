import { useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

export default function Category() {
    const { id } = useParams();

    const [category, setCategory] = useState("Category");
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "blabla",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/125/498/200",
        },
        {
            id: 2,
            title: "blabla 2",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/200/498/200",
        },
        {
            id: 3,
            title: "blabla 3",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/50/498/200",
        },
    ]);

    return (
        <section>
            <h1>{category + " " + id}</h1>

            {articles.map((article) => (
                <Card key={article.id} article={article} />
            ))}
        </section>
    );
}
