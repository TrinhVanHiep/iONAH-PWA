import GeneralNotification from './GeneralNotification';
import OrderNotification from './OrderNotification';
import SalesNotification from './SalesNotification';
import React from 'react';
export const currentPath = window.location.pathname;
export const menuList = {
    name: 'Thông Báo',
    url: 'notification',
    listSubItem: [
        {
            id: 7,
            name: 'Tất cả thông báo ',
            url: 'general',
            component: <GeneralNotification />
        },
        {
            id: 8,
            name: 'Thông báo đơn hàng',
            url: 'order',
            component: <OrderNotification />
        },
        {
            id: 9,
            name: 'Thông báo khuyến mãi',
            url: 'sales',
            component: <SalesNotification />
        },
        {
            id: 10,
            name: 'Thông báo hệ thống',
            url: 'sales',
            component: <SalesNotification />
        }
    ]
};
