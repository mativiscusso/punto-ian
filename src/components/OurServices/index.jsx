import React, { useState } from "react";
import SectionTittle from "../SectionTittle";
import iconOffice from "../../assets/svg/office-building.svg";
import iconSpaces from "../../assets/svg/workspace.svg";
import iconWorkspaces from "../../assets/svg/reunion.svg";
import iconFotografia from "../../assets/svg/camara.svg";
import imgSpaces from "../../assets/img/nomade.jpg";
import imgResidente from "../../assets/img/residente.jpg";
import imgfixdesk from "../../assets/img/fixdesk.jpg";
import imgWorkspaces from "../../assets/img/reu.jpg";
import imgReu from "../../assets/img/sala-reu.jpg";
import imgOffices from "../../assets/img/ofi.jpg";
import imgFotografia from "../../assets/img/estudio-fotografico.jpg";

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
                <div
                    className={
                        isVisible === 4
                            ? "servicios-btn shadow-none"
                            : "servicios-btn"
                    }
                    onClick={() => handleClick(4)}
                >
                    <img
                        loading="lazy"
                        src={iconFotografia}
                        alt="icono de servicios"
                    />
                    Fotografía
                </div>
            </div>
            {isVisible === 1 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <div className="container">
                        <div className="descripcion text-focus-in">
                            <img
                                loading="lazy"
                                src={imgSpaces}
                                alt="Puestos de trabajo"
                            />
                            <div>
                                <h2>Nómade</h2>
                                <h3 className="titulo-valor">Mensual</h3>
                                <ul>
                                    <li>
                                        ✔ Puesto flexible en espacios de uso
                                        común.{" "}
                                    </li>
                                    <li>
                                        ✔ 15 días completos o 30 media jornadas.
                                    </li>
                                    <li>✔ Total: 120 horas</li>
                                    <li>
                                        ✔ 6 créditos de regalo para usar en sala
                                        de reunion
                                    </li>
                                    <li>
                                        ✔ Conexión a Internet de alta velocidad
                                    </li>
                                    <li>
                                        ✔ Uso de cocina, chill, livings,
                                        bicicletero y espacios de uso común.
                                    </li>
                                    <li>
                                        ✔ Acceso a actividades sociales y
                                        profesionales.
                                    </li>
                                    <li>✔ Lockers</li>
                                </ul>
                                <h3>$5.000 +I.V.A.</h3>
                                <br />
                                <h3 className="titulo-valor">Por día</h3>
                                <span>
                                    Puesto flexible en espacios de uso común
                                    según disponibilidad en el momento.
                                </span>
                                <h3>$350 - 4hs media jornada</h3>
                                <h3>$550 - 8hs jornada completa</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="descripcion text-focus-in">
                            <img
                                loading="lazy"
                                src={imgResidente}
                                alt="Puestos de trabajo"
                            />
                            <div>
                                <h2>Residente</h2>
                                <h3 className="titulo-valor">Mensual</h3>
                                <ul>
                                    <li>
                                        ✔ Puesto flexible en espacios de uso
                                        común{" "}
                                    </li>
                                    <li>✔ Mes completo sin límite de horas.</li>
                                    <li>
                                        ✔ 8 créditos de regalo para usar en sala
                                        de reunion
                                    </li>
                                    <li>
                                        ✔ Conexión a Internet de alta velocidad
                                    </li>
                                    <li>
                                        ✔ Uso de cocina, chill, livings,
                                        bicicletero y espacios de uso común
                                    </li>
                                    <li>
                                        ✔ Acceso a actividades sociales y
                                        profesionales.
                                    </li>
                                    <li>✔ Lockers</li>
                                </ul>
                                <h3>$5.750 + I.V.A.</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="descripcion text-focus-in">
                            <img
                                loading="lazy"
                                src={imgfixdesk}
                                alt="Puestos de trabajo"
                            />
                            <div>
                                <h2>Fix Desk</h2>
                                <h3 className="titulo-valor">Mensual</h3>
                                <ul>
                                    <li>
                                        ✔ Escritorio fijo de uso exclusivo, apto
                                        para PC de escritorio o monitores
                                        permanentes
                                    </li>
                                    <li>✔ Mes completo sin límite de horas</li>
                                    <li>
                                        ✔ 10 créditos de regalo para usar en
                                        sala de reunion
                                    </li>
                                    <li>
                                        ✔ Conexión a Internet de alta velocidad
                                    </li>
                                    <li>
                                        ✔ Uso de cocina, chill, livings,
                                        bicicletero y espacios de uso común.
                                    </li>
                                    <li>
                                        ✔ Acceso a actividades sociales y
                                        profesionales.
                                    </li>
                                    <li>✔ Lockers.</li>
                                </ul>
                                <h3>$8.300 + I.V.A.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isVisible === 2 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <div className="descripcion text-focus-in">
                        <img loading="lazy" src={imgOffices} alt="Oficinas" />
                        <div>
                            <h2>Oficinas Privadas</h2>
                            <span>⏰ Lunes a Viernes de 8 a 19 hs</span>
                            <h3 className="titulo-valor">Mensual</h3>
                            <ul>
                                <li>
                                    ✔ Escritorio fijo de uso exclusivo, apto
                                    para PC de escritorio o monitores
                                    permanentes.
                                </li>
                                <li>✔ Mes completo sin límite de horas.</li>
                                <li>
                                    ✔ 10 créditos de regalo para usar en sala de
                                    reunion .
                                </li>
                                <li>
                                    ✔ Conexión a Internet de alta velocidad.
                                </li>
                                <li>
                                    ✔ Uso de cocina, chill, livings, bicicletero
                                    y espacios de uso común.
                                </li>
                                <li>
                                    ✔ Acceso a actividades sociales y
                                    profesionales.
                                </li>
                                <li>✔ Silla ergonómica.</li>
                                <li>✔ Lockers.</li>
                            </ul>
                            <h3>$10.000 + I.V.A.</h3>
                            <small>POR PUESTO DE TRABAJO</small>
                            <br />
                            <br />
                            <h3 className="titulo-valor">Por Día</h3>
                            <ul>
                                <li>
                                    ✔ En .Ian te ofrecemos la posibilidad de
                                    tener tu oficina por día.
                                </li>
                                <li>
                                    ✔ Sin contratos! Incluye cafetería y wi-fi.
                                </li>
                                <li>
                                    ✔ Tenemos acceso directo por cochera y
                                    bicicletero disponible.
                                </li>
                                <li>
                                    ✔ Disponibilidad sujeta a reserva previa.
                                </li>
                            </ul>
                            <br />

                            <p>OFICINA GRANDE (Hasta 8 personas)</p>
                            <h3>$3.000 + I.V.A. - Jornada completa</h3>
                            <h3>$1.500 + I.V.A. - Media Jornada</h3>
                        </div>
                    </div>
                </div>
            )}
            {isVisible === 3 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <div className="container">
                        <div className="descripcion text-focus-in">
                            <img
                                loading="lazy"
                                src={imgReu}
                                alt="Salas de trabajo"
                            />
                            <div>
                                <h2>Sala de reuniones</h2>
                                <p>Hasta 7 personas</p>
                                <span>
                                    <strong>
                                        CON DISTANCIAMIENTO NECESARIO COVID-19
                                        🦠
                                    </strong>
                                </span>
                                <h3 className="titulo-valor">Por Hora</h3>
                                <ul>
                                    <li>
                                        ✔ Mesa central y 12 cómodos asientos.
                                    </li>
                                    <li>✔ Enchufes multinorma.</li>
                                    <li>✔ Televisor LED pantalla plana.</li>
                                    <li>✔ Dispositivo Chromecast.</li>
                                    <li>✔ Proyector.</li>
                                    <li>✔ Pizarra móvil.</li>
                                </ul>
                                <h3>$920 + I.V.A. hora</h3>
                                <h3>$720 + I.V.A. a partir de 2 hs</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="descripcion text-focus-in">
                            <img
                                loading="lazy"
                                src={imgWorkspaces}
                                alt="Salas de trabajo"
                            />
                            <div>
                                <h2>Auditorio</h2>
                                <p>Hasta 20 personas</p>
                                <span>
                                    <strong>
                                        CON DISTANCIAMIENTO NECESARIO COVID-19
                                        🦠
                                    </strong>
                                </span>
                                <h3 className="titulo-valor">Por Hora</h3>
                                <ul>
                                    <li>✔ Proyector.</li>
                                    <li>✔ Pantalla.</li>
                                    <li>✔ Pizarra móvil.</li>
                                    <li>✔ Dispositivo Chromecast.</li>
                                    <li>✔ Aire acondicionado frio/calor.</li>
                                    <li>✔ Enchufes multinorma.</li>
                                    <li>✔ Doble iluminación.</li>
                                    <li>✔ Superficie del auditorio 100m2.</li>
                                </ul>
                                <h3>$3.450 + I.V.A. hora</h3>
                                <h3>$2875 + I.V.A. a partir de 2 hs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isVisible === 4 && (
                <div className="servicio-detalle swing-in-right-bck">
                    <div className="descripcion text-focus-in">
                        <img
                            loading="lazy"
                            src={imgFotografia}
                            alt="Estudio fotografico"
                        />
                        <div>
                            <h2>Estudio Fotográfico</h2>
                            <span>⏰ Lunes a Viernes de 8 a 19 hs</span>
                            <br />
                            <br />

                            <h3 className="titulo-valor">Estudio 1 - 40 m2</h3>
                            <small>
                                Ideal para shooting de moda, catálogos y rodajes
                                chicos.
                            </small>

                            <ul>
                                <li>x 1hs --- $1.800</li>
                                <li>x 2hs --- $3.000</li>
                                <li>x 4hs --- $4.500</li>
                                <li>x 6hs --- $6.000</li>
                                <li>x 8hs --- $7.500</li>
                            </ul>
                            <br />
                            <h3 className="titulo-valor">Estudio 2 - 100 m2</h3>
                            <small>
                                Ideal para producciones grandes con
                                escenografía, tiro muy largo de cámara y mayor
                                capacidad de personas.
                            </small>
                            <ul>
                                <li>x 3hs --- $6.000</li>
                                <li>x 6hs --- $10.000</li>
                                <li>x 8hs --- $13.000</li>
                            </ul>
                            <hr />
                            <small>
                                (*) Incluído equipo de iluminación ( 2 flashes
                                Elinchrom 400, 1 flash godox 300, 1 flash
                                multiblitz 400, 1 fresnel led con softbox de luz
                                continua, octabox de 120 cm, 3 sofbox medianos,
                                paraguas plateados y transparentes, beauty dish,
                                cono snoop, 5 tripodes, 2 tripode jirafas y
                                cables). Fondo de fotografía colorama gris 2,72
                                x 11 metros (8 colores a elección) (**) El fondo
                                innito de papel se cobra aparte si se usa para
                                caminar o apoyar cosas, por cada fondo son
                                $800.- x metro lineal pisado de fondo.
                            </small>
                            <br />
                            <img
                                src="/marcas/fotea.png"
                                alt="Fotea"
                                style={{ width: 100 }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
