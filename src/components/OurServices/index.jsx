import React, { useState } from "react";
import SectionTittle from "../SectionTittle";
import iconOffice from "../../assets/svg/office-building.svg";
import iconSpaces from "../../assets/svg/workspace.svg";
import iconWorkspaces from "../../assets/svg/reunion.svg";
import imgSpaces from "../../assets/img/d.jpg";
import imgWorkspaces from "../../assets/img/reu.bmp";
import imgOffices from "../../assets/img/ofi.bmp";

export default function OurServices() {
    const [isVisible, setIsVisible] = useState(1);
    function handleClick(num) {
        setIsVisible(num);
    }
    return (
        <section id="servicios">
            <SectionTittle tittle="SERVICIOS" />
            <div className="servicios-botones">
                <div
                    className={
                        isVisible === 1
                            ? "servicios-btn shadow-none"
                            : "servicios-btn"
                    }
                    onClick={() => handleClick(1)}
                >
                    <img src={iconSpaces} alt="icono de servicios" />
                    Espacios
                </div>
                <div
                    className={
                        isVisible === 2
                            ? "servicios-btn shadow-none"
                            : "servicios-btn"
                    }
                    onClick={() => handleClick(2)}
                >
                    <img src={iconOffice} alt="icono de servicios" />
                    Oficinas
                </div>
                <div
                    className={
                        isVisible === 3
                            ? "servicios-btn shadow-none"
                            : "servicios-btn"
                    }
                    onClick={() => handleClick(3)}
                >
                    <img src={iconWorkspaces} alt="icono de servicios" />
                    Salas
                </div>
            </div>
            {isVisible === 1 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <img src={imgSpaces} alt="Espacios de trabajo" />
                    <div className="descripcion">
                        <h2>Titulo</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ut explicabo nostrum autem ad inventore sunt
                            harum rem magnam necessitatibus? Sunt.
                        </p>
                        <h3>$7.000</h3>
                    </div>
                </div>
            )}
            {isVisible === 2 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <img src={imgOffices} alt="Oficinas" />
                    <div className="descripcion">
                        <h2>Titulo</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ut explicabo nostrum autem ad inventore sunt
                            harum rem magnam necessitatibus? Sunt.
                        </p>
                        <h3>$7.000</h3>
                    </div>
                </div>
            )}
            {isVisible === 3 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <img src={imgWorkspaces} alt="Salas de trabajo" />
                    <div className="descripcion">
                        <h2>Titulo</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ut explicabo nostrum autem ad inventore sunt
                            harum rem magnam necessitatibus? Sunt.
                        </p>
                        <h3>$7.000</h3>
                    </div>
                </div>
            )}
        </section>
    );
}
