import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
    return (
        <div id="layout">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
