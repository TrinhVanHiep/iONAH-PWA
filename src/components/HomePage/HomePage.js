import React from "react";
import { useParams } from "react-router-dom";
import PopupChangeAddress from "../PopupChangeAddress/index"
import ProductItemSelect from "../ProductItemSelect/ProductItemSelect"
import ProductItemsRecentlyView from "../ProductItemsRecentlyView/ProductItemsRecentlyView"
const hi = {
  textAlign: "center",
  margin: "1rem",
};
const wave = {
  ...hi,
  fontSize: "5rem",
};

const HomePage = () => {
  const { who = "nobody" } = useParams();
  return (
    <div>
      <h1 style={hi}>Hello, {who}!</h1>
      <h1 style={wave}>{"\uD83D\uDC4B"}</h1>
      <PopupChangeAddress />
      <ProductItemSelect
        itemName="Ti vi cuc net"
        itemPrice={300000000}
      />
      <ProductItemsRecentlyView
        totalRate={5}
        price={4000000000}
        currentRate={3}
      />
    </div>
  );
};

export default HomePage;