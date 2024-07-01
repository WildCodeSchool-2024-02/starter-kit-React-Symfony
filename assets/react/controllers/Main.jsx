import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Items from "./Pages/Items";
import EditItem from "./Pages/EditItem";
import { ThemeContextProvider } from "./context/ThemeContext";
import Layout from "./layouts/Layout";
import Category from "./Pages/Category";
import Article from "./Pages/Article";

export default function Main() {
    return (
        <ThemeContextProvider>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/items" element={<Items />} />
                        <Route path="/item/:id" element={<EditItem />} />

                        <Route path="/categories/:id" element={<Category />} />
                        <Route path="/articles/:id" element={<Article />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeContextProvider>
    );
}
