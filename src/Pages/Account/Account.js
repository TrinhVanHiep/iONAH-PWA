import React from 'react';
import Layout from '../../components/Layout';
import LayoutAccountMenu from '../../components/LayoutAccountMenu/LayoutAccountMenu';
import { menuList } from "./helper"
import { Route } from 'react-router-dom';
import defaultClasses from './Account.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

function Account() {
  const currentPath = window.location.pathname
  const classes = useStyle(defaultClasses);
  return (
    <Layout>
      <div className={classes.account}>
        <div className={classes.accountMenu}>
          {menuList.map((item) => (
            <LayoutAccountMenu item={item} currentPath={currentPath} />
          ))}
        </div>
        <div className={classes.accountContent}>
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
