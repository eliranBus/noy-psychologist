import React from "react";
import { navItems } from "./navbar/navbarData";
import NavLink from "./navbar/NavLink";
import MultiLingualContent from "../languages/MultiLingualContent";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    open && (
      <div className="menu-items">
        <ul>
          {navItems.map(({ id, title, path, cName }) => (
            <li className={cName} key={id}>
              <a href={path} onClick={() => setOpen(false)}>
                <MultiLingualContent contentID={title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default BurgerMenu;
