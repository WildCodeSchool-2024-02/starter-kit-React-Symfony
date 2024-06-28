import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Items() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/items");
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
