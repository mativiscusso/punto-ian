import React from "react";

export default function Header() {
    const urlVideo = "/videos/IanCo.mp4";
    return (
        <header>
            <div className="background-header"></div>
            <video muted autoPlay loop playsInline>
                <source src={urlVideo} type="video/mp4" />
            </video>
            <section className="header-text">
                <div className="animated-title">
                    <div className="text-top">
                        <div>
                            <h1>Bienvenidos a •IAN Co.</h1>
                        </div>
                    </div>
                    <div className="text-bottom">
                        <h2>Espacio de trabajo en comunidad</h2>
                    </div>
                </div>
            </section>
        </header>
    );
}
