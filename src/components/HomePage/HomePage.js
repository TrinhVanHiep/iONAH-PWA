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
      <ProductItemSelect
        itemName="Ti vi cuc net"
        itemPrice={300000000}
      />
      <ProductItemsRecentlyView
        totalRate={5}
        price={4000000000}
        currentRate={3}
      />
      <ProductItemsSuggest itemName={"may giat cuc manh"} itemCode={"XFFF335F"} itemPrice={300000000} isSale={true} salePercent={20} />
      <SelectSaleType isSelect={true} salePercent={30} orderPrice={20000} exprieDate={"20/20/2002"} exprieTime={"10:00"} listTag={[]} />
    </div>
  );
};

export default HomePage;