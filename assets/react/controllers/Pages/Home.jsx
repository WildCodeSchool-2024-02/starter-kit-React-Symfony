import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Home(props) {
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
            console.log(data);
            setArticles(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Hello Wilders</h1>

            <section>
                {articles.map((article) => (
                    <Card article={article} />
                ))}
            </section>
        </>
    );
}
