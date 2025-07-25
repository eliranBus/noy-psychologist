import React from "react";
import { navbarLinks } from "../assets/navbar-links/navbarLinks";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    open && (
      <div className="menu-items">
        {navbarLinks.map(({ name, link }) => (
          <li>
            <a href={link} onClick={() => setOpen(false)}>
              {name}
            </a>
          </li>
        ))}
      </div>
    )
  );
};

export default BurgerMenu;
