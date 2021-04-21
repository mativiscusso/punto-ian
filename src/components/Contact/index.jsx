import React from "react";
import SectionTittle from "../SectionTittle";

export default function Contact() {
    return (
        <section id="contacto">
            <SectionTittle tittle="¿Dónde estamos?" />
            <div className="contacto-info">
                <p>
                    No dudes en contactarnos por cualquier inquietud. Podes
                    venir a visitarnos para conocer nuestros espacios o podes
                    experimentar un dia de trabajo de cortesía.
                </p>
                <h3>Contacto</h3>
                <p>(+54) 341 3085430</p>
                <button className="enviar-msg">Enviar Mensaje</button>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2602246461756!2d-60.65338568525409!3d-32.94413837909039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab6f7af376c1%3A0xcf2755869f7067ec!2sPunto%20ian%20Co.!5e0!3m2!1sen!2sar!4v1619011430751!5m2!1sen!2sar"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                title="Ubicacion Punto Ian"
            />
        </section>
    );
}
