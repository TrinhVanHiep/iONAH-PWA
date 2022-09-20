import React from "react";
import "./ProductItemsRecentlyView.css";
import itemImg from "./img/tivi.png";
import { IconRateStar } from "../../asset/Icons/Icon";
import AddButon from "../AddButton/AddButton";
import { formatMoney } from "../../common/commonFunctions";

const ProductItemsRecentlyView = ({
  totalRate,
  price,
  currentRate,
  itemId,
  handleAddToCompare,
}) => {

  const renderRate = (
    <div className="item-rate">
      {[...Array(totalRate)].map((item, index) => {
        const listRate = index + 1;
        return (
          <i
            key={index}
            className={`rate-icon ${listRate < currentRate || listRate === currentRate ? "rated" : ""
              }`}
          >
            <IconRateStar />
          </i>
        );
      })}
    </div>
  );

  return (
    <div className="items-recently-view">
      <img src={itemImg} alt="item-img" />
      <div className="item-information">
        {renderRate}
        <div className="item-price">
          <span>{formatMoney(price)} vnd</span>
        </div>
        <AddButon
          label={"Thêm vào so sánh"}
          onClickButton={handleAddToCompare}
        />
      </div>
    </div>
  );
};

export default ProductItemsRecentlyView;
