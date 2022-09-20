import React from "react";
import { useParams } from "react-router-dom";
import PopupChangeAddress from "../PopupChangeAddress/index"
import ProductItemSelect from "../ProductItemSelect/ProductItemSelect"
import ProductItemsRecentlyView from "../ProductItemsRecentlyView/ProductItemsRecentlyView"
import ProductItemsSuggest from "../ProductItemsSuggest/ProductItemsSuggest";
import SelectSaleType from "../SelectSaleType/SelectSaleType"
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
    </div>
  );
};

export default HomePage;