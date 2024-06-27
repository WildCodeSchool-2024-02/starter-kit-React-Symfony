import React, { useEffect, useState } from "react";
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
                            <a href={`/item/${item.id}`}>{item.title}</a>
                        </h3>
                    </div>
                ))}
            </div>
        </>
    );
}
