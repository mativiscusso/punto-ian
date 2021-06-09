import React, { Suspense } from "react";
import Layout from "../layout";
const Header = React.lazy(() => import("../components/Header"));
const OurServices = React.lazy(() => import("../components/OurServices"));
const About = React.lazy(() => import("../components/About"));
const Tour = React.lazy(() => import("../components/Tour"));
const Contact = React.lazy(() => import("../components/Contact"));

export default function Home() {
    return (
        <div id="home">
            <Layout>
                <Suspense fallback={"Loading..."}>
                    <Header />
                    <OurServices />
                    <About />
                    <Tour />
                    <Contact />
                </Suspense>
            </Layout>
        </div>
    );
}
