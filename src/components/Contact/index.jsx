import React from "react";
import SectionTittle from "../SectionTittle";
import maps from '../../assets/img/maps.jpg'

export default function Contact() {
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
               <a href="https://wa.link/ntkshl" target="_blank" rel="noopener noreferrer"><button className="enviar-msg hvr-pop">Enviar Mensaje</button></a> 
            </div>
            <img className="contacto-mapa"src={maps} alt="Ubicacion punto ian"/>
        </section>
    );
}
