import React from "react";
import AccountInformationPage from "../../components/AccountInformationPage";
import WishList from "../../components/WishList/WishList";
// import AccountInformation from "../AccountInformation";
import AllOrder from "../AllOrder";
import BillingInformation from "../BillingInformation/BillingInformation";
import DeliveryAddress from "../DeliveryAddress";
import GeneralNotification from "../Notifications/GeneralNotification";
import OrderNotification from "../Notifications/OrderNotification";
import SalesNotification from "../Notifications/SalesNotification";
import OrderTracking from "../OrderTracking";
// import WishList from "../Wishlist";

export const menuList = [
  {
    name: "My Account",
    url: "my-account",
    listSubItem: [
      {
        id: 1,
        name: "Thông tin tài khoản",
        url: "account-information",
        component: <AccountInformationPage />
      },
      {
        id: 2,
        name: "Địa chỉ giao hàng",
        url: "delivery-address",
        component: <DeliveryAddress />
      },
      {
        id: 3,
        name: "Thông tin thanh toán",
        url: "billing-information",
        component: <BillingInformation />
      },
      {
        id: 4,
        name: "Sản phẩm yêu thích",
        url: "wish-list",
        component: <WishList />
      },
    ]
  },
  {
    name: "Quản lý đơn hàng",
    url: "order-manage",
    listSubItem: [
      {
        id: 5,
        name: "Tất cả đơn hàng",
        url: "all-order",
        component: <AllOrder />
      },
      {
        id: 6,
        name: "Theo dõi đơn hàng",
        url: "order-tracking",
        component: <OrderTracking />
      }
    ]
  },
  {
    name: "Thông Báo",
    url: "notification",
    listSubItem: [
      {
        id: 7,
        name: "Thông báo chung",
        url: "general",
        component: <GeneralNotification />
      },
      {
        id: 8,
        name: "Thông báo đơn hàng",
        url: "order",
        component: <OrderNotification />
      },
      {
        id: 9,
        name: "Thông báo khuyến mãi",
        url: "sales",
        component: <SalesNotification />
      },
    ]
  }
]
