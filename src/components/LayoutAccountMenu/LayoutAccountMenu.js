import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import defaultClasses from './LayoutAccountMenu.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

function LayoutAccountMenu({ item, currentPath }) {
  const classes = useStyle(defaultClasses);
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    if (currentPath) {
      setActiveLink(currentPath)
    }
  }, [currentPath])

  return (
    <ul className={classes.layoutAccountMenu}>
      <li className={classes.menuItems}>
        <p className={classes.menuItemsName}>{item.name}</p>
        <ul className={classes.subMenu}>
          {item?.listSubItem && item?.listSubItem?.map((subMenu) => (
            <li className={`${classes.subMenuItem} ${activeLink === subMenu.url ? "active" : ""} `}>
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

export default LayoutAccountMenu;
