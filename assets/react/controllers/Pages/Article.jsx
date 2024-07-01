import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

import "../../../styles/article.css";

export default function Article() {
    const { theme } = useContext(ThemeContext);
    const { id } = useParams();
    const [article, setArticle] = useState({
        id: 1,
        title: "blabla",
        description:
            "koef kopfezop efzoekpz fzegopeg opj eojuzejfopzejp e zzfezkez eze^pez^z",
        image: "https://picsum.photos/id/10/498/200",
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/api/article/${id}`);
            setArticle(data);
        };

        fetchData();
    }, []);

    return (
        <article className={`${theme} article`}>
            <h1>{article.title}</h1>
            <img src={article.image} alt={`${article.name} picture`} />
            <p>
                {article.description}: Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Dolor maxime iste corrupti, repellat officiis
                harum odit. Perferendis labore temporibus ex nesciunt ullam
                aliquid necessitatibus! Quibusdam maxime debitis reiciendis
                dolores at architecto aliquam beatae illum, commodi laborum
                iure? Explicabo ipsa consectetur, quo iure minima quos
                distinctio beatae atque similique nobis fuga.
            </p>
        </article>
    );
}
