import React from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

const index = (props) => {
    return (
        <Menu {...props}>
            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="#nosotros"
            >
                nosotros
            </NavLink>

            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="#servicios"
            >
                servicios
            </NavLink>

            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="/comunidad"
            >
                comunidad
            </NavLink>
            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="#contacto"
            >
                contacto
            </NavLink>
        </Menu>
    );
};

export default index;
