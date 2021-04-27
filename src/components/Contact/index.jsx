import React, { useEffect, useState } from "react";
import SectionTittle from "../SectionTittle";

export default function Contact() {
    const [width, setWidth] = useState(0);
    const [map, setMap] = useState("false");
    useEffect(() => {
        setWidth(window.screen.width);
    }, []);
    if (width < 414) {
        import("../../assets/img/maps-mobile-2.jpg")
            .then((map) => {
                setMap(map.default);
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (width > 414 && width < 1280) {
        import("../../assets/img/maps-mobile.jpg")
            .then((map) => {
                setMap(map.default);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        import("../../assets/img/maps.jpg")
            .then((map) => {
                setMap(map.default);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <section id="contacto">
            <SectionTittle tittle="¿Dónde estamos?" />
            <div className="contacto-info text-focus-in">
                <p>
                    No dudes en contactarnos por cualquier inquietud. Podes
                    venir a visitarnos para conocer nuestros espacios o podes
                    experimentar un dia de trabajo de cortesía.
                </p>
                <h3>Contacto</h3>
                <p>(+54) 341 3085430</p>
                <small>
                    <a
                        href="https://g.page/ian_Coworking?share"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Córdoba 2035 - Rosario, SF (2000)
                    </a>
                </small>
                <a
                    href="https://wa.link/ntkshl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="enviar-msg hvr-pop">
                        Enviar Mensaje
                    </button>
                </a>
            </div>
            <img
                loading="lazy"
                className="contacto-mapa"
                src={map}
                alt="Ubicacion punto ian"
            />
        </section>
    );
}
