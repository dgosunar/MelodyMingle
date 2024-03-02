import React from "react";
import { NavLink } from "react-router-dom";
import { deskNavStyles } from "./styles";

function DeskNav({ titles }) {
  return (
    <div className={deskNavStyles.nav}>
      <div className={deskNavStyles.menu}>
        {titles.map((t) => (
          <NavLink
            to={t.route}
            key={t.label}
            className={({ isActive }) =>
              isActive ? deskNavStyles.itemSelected : "mediumText"
            }
          >
            <div className={deskNavStyles.item}>{t.label}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export { DeskNav };
