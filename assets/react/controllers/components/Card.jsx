import { Link } from "react-router-dom";
import "../../../styles/card.css";

export default function Card({ article }) {
    const { id, title, description, image } = article;

    return (
        <Link to={`/articles/${id}`}>
            <article>
                <h1>{title}</h1>
                <img src={image} alt={`${title} picture`} />
                <p>{description}</p>
            </article>
        </Link>
    );
}
