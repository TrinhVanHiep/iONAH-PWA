import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./LayoutAccountMenu.css";

function LayoutAccountMenu({ item, currentPath }) {
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    if (currentPath) {
      setActiveLink(currentPath)
    }
  }, [currentPath])

  return (
    <ul className="layout-account-menu">
      <li className="menu-items">
        <p className="menu-items__name">{item.name}</p>
        <ul className="sub-menu">

          {item?.listSubItem && item?.listSubItem?.map((subMenu) => (
            <li className={`sub-menu__item ${activeLink === subMenu.url ? "active" : ""} `}>
              <NavLink
                to={`/account/${item.url}/${subMenu.url}`}
                key={subMenu.name}
              >
                {subMenu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default LayoutAccountMenu
