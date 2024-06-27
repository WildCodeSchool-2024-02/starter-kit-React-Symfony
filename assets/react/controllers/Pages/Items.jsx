import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Items() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/items");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="pink-stripe">Page Item</div>
            <div className="white-stripe">
                {data.map((item) => (
                    <div key={item.id} className="item">
                        <h3 className="item-title">
                            <Link to={`/item/${item.id}`}>{item.title}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </>
    );
}
