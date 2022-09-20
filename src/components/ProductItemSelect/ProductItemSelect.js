import React from "react";
import "./ProductItemSelect.css";
import itemImg from "./img/tivi.png";
import { formatMoney } from "../../common/commonFunctions";
import AddButon from "../AddButton/AddButton";

const ProductItemSelect = ({
  itemId,
  img,
  itemName,
  itemPrice,
  handleAddToSearch,
}) => {
  return (
    <div className="product-items-select">
      <div className="item-img">
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className="items-detail">
        <div className="item-information">
          <p className="item-name">{itemName}</p>
          <span className="item-price">{formatMoney(itemPrice)} vnd</span>
        </div>
        <AddButon
          label={"Thêm vào so sánh"}
          onClickButton={handleAddToSearch}
        />
      </div>
    </div>
  );
};

export default ProductItemSelect;
