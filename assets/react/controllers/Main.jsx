import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Items from "./Pages/Items";
import EditItem from "./Pages/EditItem";
import { ThemeContextProvider } from "./context/ThemeContext";
import Layout from "./layouts/Layout";
import Error from "./components/Error";
import Article from "./Pages/Article.jsx";
import Category from "./Pages/Category.jsx";

export default function Main() {
    return (
        <ThemeContextProvider>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />

                        <Route path="/articles/:id" element={<Article />} />
                        <Route path="/categories/:id" element={<Category />} />

                        <Route path="/items" element={<Items />} />
                        <Route path="/item/:id" element={<EditItem />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeContextProvider>
    );
}
