import React from "react";
import { NavLink } from "react-router-dom";
import { DeskNav } from "./DeskNav";
import { MobNav } from "./MobNav";
import { navStyles } from "./styles";

// Array of titles and routes ===========
const titles = [
  { label: "Inicio", route: "/MelodyMingle/" },
  { label: "Contacto", route: "/MelodyMingle/Contact" },
];

function Navbar() {
  return (
    <div className={navStyles.container}>
      <div className={navStyles.header}>
        <div className={navStyles.logo}>
          <NavLink href="/MelodyMingle/" className="flex">
            <img src="./Logos/Imagotipo.png" alt="Imagotipo" />
            <img src="./Logos/OnDev.png" alt="Imagotipo" />
          </NavLink>
        </div>
        <DeskNav titles={titles} />
        <MobNav titles={titles} />
      </div>
    </div>
  );
}

export { Navbar };
