import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { mobNavStyles } from "./styles";

function MobNav({ titles }) {
  // State to control whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Event handler to toggle opening and closing of the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={mobNavStyles.nav}>
      <FontAwesomeIcon
        icon={faBars}
        className={mobNavStyles.burgerButton}
        onClick={handleMenuToggle}
      />
      <div
        className={isMenuOpen ? mobNavStyles.background : "hidden"}
        onClick={handleMenuToggle}
      />
      <div className={isMenuOpen ? mobNavStyles.respMenu : "hidden"}>
        {titles.map((t) => (
          <NavLink
            to={t.route}
            key={t.label}
            className={({ isActive }) =>
              isActive ? mobNavStyles.itemSelected : "mediumText"
            }
            onClick={handleMenuToggle}
          >
            <div className={mobNavStyles.item}>{t.label}</div>
          </NavLink>
        ))}
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className={isMenuOpen ? mobNavStyles.xButton : "hidden"}
        onClick={handleMenuToggle}
        color="var(--primary-main)"
      />
    </div>
  );
}

export { MobNav };
