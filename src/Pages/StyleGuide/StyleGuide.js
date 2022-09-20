import React, { useCallback, useEffect, useRef, useState } from "react";
// import Banner from "../../component/Banner";
// import Header from "../../component/headers/Headers";
// import Item_Slide from "../../component/Item_Slide_Shop_By_Brand/Item_Slide";
// import ProductItemView from "../../component/ProductItemView/ProductItemView";
// import ProductCards from "../../component/prosuctCard/ProductCard";
// import Big_Banner from "../../component/Banner_Category_Products/Banner_Category_Products";
// import ProductImages from "../../component/ProductImage/ProductImage";
// import Popup_Choose_A_Delivery_Time from "../../component/Popup_Choose_A_Delivery_Time/index";
// import SignUpModal from "../../component/Modal/SignUpModal";
// import SignInModal from "../../component/Modal/SignInModal";
// import ShareViaSocialNetwork from "../../component/ShareViaSocialNetwork";
import PopupChangeShippingAddress from "../../components/PopupChangeShippingAddress";
import FavoriteProduct from "../../components/FavoriteProduct";
import DeliveryAddress from "../../components/DeliveryAddress/DeliveryAddress";

function StyleGuide() {
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    setHeight(scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isShowSignInModal, setIsShowSignInModal] = useState(false);
  const [isShowSignUpModal, setIsShowSignUpModal] = useState(false);
  const handleOpen = (modalName) => {
    if (modalName === "signIn") setIsShowSignInModal(true);
    else setIsShowSignUpModal(true);
  };
  const handleClose = () => {
    setIsShowSignUpModal(false);
    setIsShowSignInModal(false);
  };

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const box = {
    backgroundColor: "gray",
    padding: "30px",
  };

  const lstBox = {
    maxWidth: "1150px",
    margin: "0 auto",
  };

  const bg = {
    backgroundColor:"#c1c1c1",
    margin: "0 auto",
  }

  return (
    <>
      <div>
        <div style={bg}>
          <div style={lstBox}>
            <DeliveryAddress/>
            {/* <FavoriteProduct /> */}
          </div>
        </div>
        {/* <FavoriteProduct/> */}
        {/* <PopupChangeShippingAddress /> */}
        {/* <div className="session1">
          <Banner />
        </div>
        <div style={{ margin: 20 }}></div>
        <ProductCards />
        <div style={{ margin: 20 }}></div>
        <ProductImages />
        <div style={{ margin: 20 }}></div>
        <Item_Slide />
        <div style={{ margin: 20 }}></div>
        <Big_Banner />
        <div style={{ margin: 20 }}></div>
        <ProductItemView /> */}
      </div>
      {/* <SignInModal
        isShowSignUpModal={isShowSignInModal}
        handleClose={handleClose}
      />
      <SignUpModal
        isShowSignUpModal={isShowSignUpModal}
        handleClose={handleClose}
      /> */}

      <div style={box}>
        {/* <button onClick={(e) => setVisibility(!visibility)}>Share Via Social Network</button>
    <ShareViaSocialNetwork onClose={popupCloseHandler}
    showPopup={visibility}/> */}
        <button onClick={(e) => setVisibility(!visibility)}>
          Share Via Social Network
        </button>
        <PopupChangeShippingAddress
          onClose={popupCloseHandler}
          showPopup={visibility}
        />
      </div>
    </>
  );
}

export default StyleGuide;
