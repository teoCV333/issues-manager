import React from "react";
import './FloatMenu.css';

function FloatMenu() {

    return (
      <div className="float-session-menu">
        <ul>
          <li className="session-menu-item">Perfil</li>
          <li className="session-menu-item">Ajustes</li>
          <li className="session-menu-item">Cerrar sesión</li>
        </ul>
      </div>
    );
}

export { FloatMenu };