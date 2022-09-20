import React from "react"
import "./ProductItemsSuggest.css";
import itemImg from "./img/wash-machine.png";
import { formatMoney } from "../../common/commonFunctions";

const ProductItemsSuggest = ({
  itemId,
  img,
  itemName,
  itemCode,
  itemPrice,
  isSale,
  salePercent,
}) => {
  return (
    <div className="product-items-suggest">
      <div className="item-img">
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className="items-detail">
        <div className="item-information">
          <span className="item-name">{itemName} </span>
          <span className="item-name">({itemCode})</span>
          <br />
          <span className="item-price">{formatMoney(itemPrice)}</span>
          <br className="break-line" />
          {isSale ? (
            <>
              <span className="item-old-price">{formatMoney(itemPrice)}</span>
              <br className="break-line" />
              <span className="item-sale-percent">{salePercent}%</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductItemsSuggest;
