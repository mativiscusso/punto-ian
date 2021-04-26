import React, { useState } from "react";
import SectionTittle from "../SectionTittle";
import iconOffice from "../../assets/svg/office-building.svg";
import iconSpaces from "../../assets/svg/workspace.svg";
import iconWorkspaces from "../../assets/svg/reunion.svg";
import imgSpaces from "../../assets/img/d.jpg";
import imgWorkspaces from "../../assets/img/reu.jpg";
import imgOffices from "../../assets/img/ofi.jpg";

export default function OurServices() {
    const [isVisible, setIsVisible] = useState(1);
    function handleClick(num) {
        setIsVisible(num);
    }
    return (
        <section id="servicios">
            <SectionTittle tittle="SERVICIOS" />
            <div className="servicios-botones slide-top">
                <div
                    className={
                        isVisible === 1
                            ? "servicios-btn shadow-none"
                            : "servicios-btn"
                    }
                    onClick={() => handleClick(1)}
                >
                    <img
                        loading="lazy"
                        src={iconSpaces}
                        alt="icono de servicios"
                    />
                    Puestos
                </div>
                <div
                    className={
                        isVisible === 2
                            ? "servicios-btn shadow-none"
                            : "servicios-btn"
                    }
                    onClick={() => handleClick(2)}
                >
                    <img
                        loading="lazy"
                        src={iconOffice}
                        alt="icono de servicios"
                    />
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
                    <img
                        loading="lazy"
                        src={iconWorkspaces}
                        alt="icono de servicios"
                    />
                    Salas
                </div>
            </div>
            {isVisible === 1 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <img
                        loading="lazy"
                        src={imgSpaces}
                        alt="Puestos de trabajo"
                    />
                    <div className="container">
                        <div className="descripcion text-focus-in">
                            <h2>Nómade</h2>
                            <h3 className="titulo-valor">Mensual</h3>
                            <p>
                                Puesto flexible en espacios de uso común según
                                disponibilidad en el momento. 15 días completos
                                o 30 media jornadas. TOTAL: 120 horas. 6
                                créditos de regalo para usar en cualquier
                                servicio del espacio. Conexión a Internet de
                                alta velocidad. Uso de cocina, chill, livings,
                                bicicletero y espacios de uso común. Acceso a
                                actividades sociales y profesionales.
                            </p>
                            <h3>$4.300 +I.V.A.</h3>
                            <h3 className="titulo-valor">Por Jornada</h3>
                            <p>
                                Puesto flexible en espacios de uso común según
                                disponibilidad en el momento.
                            </p>
                            <h3>$250 - 4hs</h3>
                            <h3>$350 - 8hs</h3>
                        </div>
                        <hr />
                        <div className="descripcion text-focus-in">
                            <h2>Residente</h2>
                            <h3 className="titulo-valor">Mensual</h3>
                            <p>
                                Puesto flexible en espacios de uso común según
                                disponibilidad en el momento. Mes completo sin
                                límite de horas. 8 créditos de regalo para usar
                                en cualquier servicio del espacio. Conexión a
                                Internet de alta velocidad. Uso de cocina,
                                chill, livings, bicicletero y espacios de uso
                                común. Acceso a actividades sociales y
                                profesionales.
                            </p>
                            <h3>$5.000 + I.V.A.</h3>
                        </div>
                        <hr />
                        <div className="descripcion text-focus-in">
                            <h2>Fix Desk</h2>
                            <h3 className="titulo-valor">Mensual</h3>
                            <p>
                                Escritorio fijo de uso exclusivo, apto para PC
                                de escritorio o monitores permanentes. Mes
                                completo sin límite de horas. 10 créditos de
                                regalo para usar en cualquier servicio del
                                espacio. Conexión a Internet de alta velocidad.
                                Uso de cocina, chill, livings, bicicletero y
                                espacios de uso común. Acceso a actividades
                                sociales y profesionales.
                            </p>
                            <h3>$6.800 + I.V.A.</h3>
                        </div>
                    </div>
                </div>
            )}
            {isVisible === 2 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <img loading="lazy" src={imgOffices} alt="Oficinas" />
                    <div className="descripcion text-focus-in">
                        <h2>Oficinas Privadas</h2>
                        <h3 className="titulo-valor">Mensual</h3>
                        <p>
                            Escritorio fijo de uso exclusivo, apto para PC de
                            escritorio o monitores permanentes. Mes completo sin
                            límite de horas. 10 créditos de regalo para usar en
                            cualquier servicio del espacio. Conexión a Internet
                            de alta velocidad. Uso de cocina, chill, livings,
                            bicicletero y espacios de uso común. Acceso a
                            actividades sociales y profesionales.
                        </p>
                        <h3>$8.300 + I.V.A.</h3>
                        <small>POR PUESTO DE TRABAJO</small>
                        <br />
                        <br />
                        <h3 className="titulo-valor">Por Día</h3>
                        <p>
                            En .Ian te ofrecemos la posibilidad de tener tu
                            ocina por día, durante una jornada completa o media
                            jornada. Sin contratos! Incluye cafetería y wi-.
                            Tenemos acceso directo por cochera y bicicletero
                            disponible. Disponibilidad sujeta a reserva previa.
                        </p>
                        <br />
                        <p>OFICINA CHICA (Hasta 4 personas)</p>
                        <h3>$1.500 + I.V.A. - Jornada completa</h3>
                        <h3>$1.000 + I.V.A. - Media Jornada</h3>
                        <br />
                        <p>OFICINA GRANDE (Hasta 8 personas)</p>
                        <h3>$3.000 + I.V.A. - Jornada completa</h3>
                        <h3>$1.500 + I.V.A. - Media Jornada</h3>
                    </div>
                </div>
            )}
            {isVisible === 3 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <img
                        loading="lazy"
                        src={imgWorkspaces}
                        alt="Salas de trabajo"
                    />
                    <div className="container">
                        <div className="descripcion text-focus-in">
                            <h2>Sala de reuniones</h2>
                            <p>Hasta 15 personas</p>
                            <h3 className="titulo-valor">Por Hora</h3>
                            <p>
                                Nuestra sala de reuniones cuenta con una mesa
                                central y 12 cómodos asientos, enchufes
                                multinorma, televisor LED pantalla plana y
                                dispositivo chromecast. Además, está equipada
                                con paneles de insonorización, aire
                                acondicionado frío/calor y doble iluminación
                                (una es más tenue para la presentación de
                                diapositivas, videos, etc).
                            </p>
                            <h3>$920 + I.V.A. hora</h3>
                            <h3>$690 + I.V.A. a partir de 2 hs</h3>
                        </div>
                        <hr />
                        <div className="descripcion text-focus-in">
                            <h2>Auditorio</h2>
                            <p>Hasta 70 personas</p>
                            <h3 className="titulo-valor">Por Hora</h3>
                            <p>
                                Se puede acordar de antemano la disposición del
                                mobiliario en base a tus necesidades
                                particulares. Al igual que la sala de reuniones,
                                este espacio cuenta con proyector, pantalla,
                                pizarra móvil, dispositivo chromecast, enchufes
                                multinorma, aire acondicionado frío/calor y
                                doble iluminación. Superficie del auditorio
                                100m2.
                            </p>
                            <h3>$3.450 + I.V.A. hora</h3>
                            <h3>$2875 + I.V.A. a partir de 2 hs</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
