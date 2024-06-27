import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <>
            <h1 className="pink-stripe">Hello Wilders</h1>
            <div className="white-stripe">
                <h2 className="item-title">
                    <Link to={`/items`}>Page item</Link>
                </h2>
                <p>{props.slug}</p>
            </div>
        </>
    );
}
