import React from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

const index = (props) => {
    return (
        <Menu {...props}>
            <a href="#nosotros">nosotros</a>
            <a href="#servicios">servicios</a>
            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="/comunidad"
            >
                comunidad
            </NavLink>
            <a href="#contacto">contacto</a>
        </Menu>
    );
};

export default index;
