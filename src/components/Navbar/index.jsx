import React from "react";
import { NavLink } from "react-router-dom";
import logoIan from "../../assets/img/logo-punto-ian.png";
import MenuMobile from "../MenuMobile";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar-logo">
                    <img src={logoIan} alt="Logo Punto Ian" />
                </div>
            </NavLink>

            <div className="navbar-icon-hamburg">
                <MenuMobile right />
            </div>
            <div className="navbar-links">
                <ul>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="#nosotros"
                        >
                            nosotros
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="#servicios"
                        >
                            servicios
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="/comunidad"
                        >
                            #comunidad
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="#contacto"
                        >
                            #contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
