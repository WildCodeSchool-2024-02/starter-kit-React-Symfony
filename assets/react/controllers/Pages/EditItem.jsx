import { useState, useEffect } from "react";

export default function EditItem(props) {
    const [item, setItem] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `/api/items/${props.id}`,
                    {
                        method: "GET",
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setItem(data);
                    setTitle(data.title);
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données:",
                    error
                );
            }
        };
        fetchData();
    }, [props.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `/api/items/${props.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title }),
                }
            );
            if (response.ok) {
                const updatedItem = await response.json();
                setItem(updatedItem);
            }
        } catch (error) {
            console.error("Erreur dans la mise à jour de l'item:", error);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `/api/items/${props.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                if (data.redirectUrl) {
                    window.location.href = data.redirectUrl;
                }
            }
        } catch (error) {
            console.error("Erreur lors de la suppression item:", error);
        }
    };

    if (!item) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <h1>Modifier l'item</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titre :</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button type="submit">Enregistrer</button>
                </form>
                <form onSubmit={handleDelete}>
                    <button type="submit">Supprimer</button>
                </form>
            </div>
        </div>
    );
}
