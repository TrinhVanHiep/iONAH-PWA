import React from "react";
import { useParams } from "react-router-dom";
import PopupChooseDeliveryTime from "../PopupChooseDeliveryTime/index"
import ProductItemSelect from "../ProductItemSelect/ProductItemSelect"
import ProductItemsRecentlyView from "../ProductItemsRecentlyView/ProductItemsRecentlyView"
import ProductItemsSuggest from "../ProductItemsSuggest/ProductItemsSuggest";
import SelectSaleType from "../SelectSaleType/SelectSaleType"
import Footer from "../Footer"
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
      <PopupChooseDeliveryTime/>
    </div>
  );
};

export default HomePage;