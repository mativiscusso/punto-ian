import React from "react";
import Layout from "../layout";
import Header from "../components/Header";
import OurServices from "../components/OurServices";

export default function Home() {
    return (
        <div id="home">
            <Layout>
                <Header />
                <OurServices />
            </Layout>
        </div>
    );
}
