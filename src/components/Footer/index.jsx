import React from "react";
import logoIan from "../../assets/img/logo-punto-ian-2.png";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import email from "../../assets/svg/email.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bounce-in-top">
                    <img
                        loading="lazy"
                        src={logoIan}
                        alt="Logo Punto Ian"
                        srcSet={logoIan}
                    />
                    <div className="row">
                        <a
                            href="https://www.facebook.com/puntoianCo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hvr-pop"
                        >
                            <img
                                loading="lazy"
                                className="icons-footer"
                                src={facebook}
                                alt="Facebook"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/puntoiancoworking/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hvr-pop"
                        >
                            <img
                                loading="lazy"
                                className="icons-footer"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                        <a
                            href="mailto:info@crecerargentina.com.ar?subject=Contacto desde web"
                            className="hvr-pop"
                        >
                            <img
                                loading="lazy"
                                className="icons-footer"
                                src={email}
                                alt="email"
                            />
                        </a>
                        <a
                            href="https://wa.link/ntkshl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hvr-pop"
                        >
                            <img
                                loading="lazy"
                                className="icons-footer"
                                src={whatsapp}
                                alt="whatsapp"
                            />
                        </a>
                    </div>
                </div>
                <div className="bounce-in-top">
                    <h4>HORARIOS</h4>
                    <p>Lunes a Viernes de 08.00 a 18.45 hrs.</p>
                    <p>Córdoba 2035 - Rosario, SF (2000)</p>
                    <p>info@crecerargentina.com.ar</p>
                </div>
                <div className="bounce-in-top">
                    <h4>SUSCRIBITE PARA RECIBIR NUESTRAS NOVEDADES</h4>
                    <div className="form-control">
                        <form>
                            <input
                                type="text"
                                name="newsletter"
                                id="newsletter"
                            />
                            <button className="hvr-pop" type="submit">
                                SUSCRIBIRME
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
            <p className="copy">
                Copiright 2021 - Hecho por{" "}
                <a href="https://iandigitaltalent.com">IAN Digital Talent</a>
            </p>
        </>
    );
}
