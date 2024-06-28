import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Home(props) {
    const { theme, changeThemeHandler } = useContext(ThemeContext);

    return (
        <>
            <h1 className={theme === "light" ? "pink-stripe" : "dark-stripe"}>
                Hello Wilders
            </h1>
            <div className="white-stripe">
                <h2 className="item-title">
                    <Link to={`/items`}>Page item</Link>
                </h2>
                <p>{props.slug}</p>
            </div>
            <button className="theme-button" onClick={changeThemeHandler}>
                Change Theme
            </button>
        </>
    );
}
