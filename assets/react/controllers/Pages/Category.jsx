import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Category() {
    const { id } = useParams();

    const [category, setCategory] = useState({ id: 1, name: "Category" });
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "blabla",
            description:
                "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
            image: "https://picsum.photos/id/125/498/200",
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/api/category/${id}`);
            setCategory({ id: data.id, name: data.name });
            setArticles(data.articles);
        };
        fetchData();
    }, [id]);

    return (
        <section>
            <h1>{category.name}</h1>

            {articles.map((article) => (
                <Card key={article.id} article={article} />
            ))}
        </section>
    );
}
