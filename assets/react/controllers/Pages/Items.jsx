import React, { useEffect, useState } from "react";

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
                            <a href={`/item/${item.id}`}>{item.title}</a>
                        </h3>
                    </div>
                ))}
            </div>
        </>
    );
}
