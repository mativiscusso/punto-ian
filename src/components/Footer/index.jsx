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
                    <img src={logoIan} alt="Logo Punto Ian" srcset={logoIan} />
                    <div className="row">
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="icons-footer"
                                src={facebook}
                                alt="Facebook"
                            />
                        </a>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="icons-footer"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="icons-footer"
                                src={email}
                                alt="email"
                            />
                        </a>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
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
                        <form action="" method="post">
                            <input
                                type="text"
                                name="newsletter"
                                id="newsletter"
                            />
                            <button type="submit">SUSCRIBIRME</button>
                        </form>
                    </div>
                </div>
            </footer>
            <p className="copy">Copiright 2021 .IAN COWORKING</p>
        </>
    );
}
