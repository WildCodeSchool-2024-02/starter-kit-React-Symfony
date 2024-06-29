import { useParams } from "react-router-dom";

export default function Article() {
    const { id } = useParams();
    return (
        <>
            <h1>Article {id}</h1>
        </>
    );
}
