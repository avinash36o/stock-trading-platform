import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./landing_page/home/Homepage";
import Signup from "./landing_page/Signup/Signup";
import About from "./landing_page/About/About";
import Pricing from "./landing_page/Pricing/Pricing";
import Products from "./landing_page/Products/Products";
import Support from "./landing_page/Support/Support";
import Header from "./landing_page/Header";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
