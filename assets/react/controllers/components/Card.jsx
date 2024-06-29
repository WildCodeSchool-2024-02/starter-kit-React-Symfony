import { Link } from "react-router-dom";
import "../../../styles/card.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Card({ article }) {
    const { id, title, description, image } = article;
    const { theme } = useContext(ThemeContext);

    return (
        <Link to={`/articles/${id}`}>
            <article className={`${theme} card`}>
                <h1>{title}</h1>
                <img src={image} alt={`${title} picture`} />
                <p>{description}</p>
            </article>
        </Link>
    );
}
