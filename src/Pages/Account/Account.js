import React from 'react';
import "./Account.css";
import Layout from '../../components/Layout';
import LayoutAccountMenu from '../../components/LayoutAccountMenu/LayoutAccountMenu';
import { menuList } from "./helper"
import { Route } from 'react-router-dom';

function Account() {
  const currentPath = window.location.pathname
  return (
    <Layout>
      <div className="account">
        <div className="account-menu">
          {menuList.map((item) => (
            <LayoutAccountMenu item={item} currentPath={currentPath} />
          ))}
        </div>
        <div className="account-content">
          {menuList.map((element, index) => (
            <>
              {element.listSubItem.map((item, index) => (
                <Route
                  path={`/account/${element.url}/${item.url}`}
                  key={String(index)}
                >
                  {item.component}
                </Route>
              ))}
            </>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Account;
