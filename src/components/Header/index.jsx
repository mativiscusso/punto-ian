import React from "react";

export default function Header() {
    const urlVideo =
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    return (
        <header>
            <div className="background-header"></div>
            <video muted autoPlay loop playsInline>
                <source src={urlVideo} type="video/mp4" />
            </video>
            <section className="header-text">
                <h1>Bienvenidos a •IAN Co.</h1>
                <h2>Tu espacio de trabajo en Rosario</h2>
            </section>
        </header>
    );
}
