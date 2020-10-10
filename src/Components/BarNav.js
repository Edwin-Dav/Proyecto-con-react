import React from "react";
import {Link} from "react-router-dom";

function Barnav() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/blog">Inicio</Link>
                </li>
                <li>
                    <Link to="/home">Nosotros</Link>
                </li>
                <li>
                    <Link to="/tiendas">Tiendas</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/cuenta">Crear cuenta</Link>
                </li>
                </ul>
        </div>
    );
}

export default Barnav;