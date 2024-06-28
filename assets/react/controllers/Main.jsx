import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Items from "./Pages/Items";
import EditItem from "./Pages/EditItem";
import { ThemeContextProvider } from "./context/ThemeContext";

export default function Main() {
    return (
        <ThemeContextProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/item/:id" element={<EditItem />} />
                </Routes>
            </Router>
        </ThemeContextProvider>
    );
}
