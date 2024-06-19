import React from "react";

export default function Home(props) {
    return (
        <>
            <h1 className="pink-stripe">Hello {props.fullName}</h1>
            <div className="white-stripe">
                <h2 className="item-title">
                    <a href="/items">Page Item</a>
                </h2>
            </div>
        </>
    );
}
