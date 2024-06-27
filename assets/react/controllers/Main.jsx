import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Items from "./Pages/Items";
import EditItem from "./Pages/EditItem";

export default function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/items" element={<Items />} />
                <Route path="/item/:id" element={<EditItem />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById("app")) {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    );
}
