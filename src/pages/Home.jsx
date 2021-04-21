import React from "react";
import Layout from "../layout";
import Header from "../components/Header";
import OurServices from "../components/OurServices";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div id="home">
            <Layout>
                <Header />
                <OurServices />
                <About />
                <Contact/>
            </Layout>
        </div>
    );
}
