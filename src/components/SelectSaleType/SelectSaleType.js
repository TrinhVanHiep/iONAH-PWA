import React from "react";
import "./SelectSaleType.css";
import itemImg from "../../asset/img/ProductItemSale/momo.png";
import { IconInformation } from "../../asset/Icons/Icon";
import TagType from "../TagType/TagType";
import Button from "../Button";
import { formatMoney } from "../../common/commonFunctions";

const SelectSaleType = ({
  img,
  isSelect,
  listTag,
  salePercent,
  orderPrice,
  exprieTime,
  exprieDate,
  handleSelectSaleType,
}) => {
  const handleClick = () => {
    if (handleSelectSaleType) {
      handleSelectSaleType();
    }
  };

  return (
    <div className="select-sale-type">
      <div className="item-img">
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className="items-detail">
        <div className="item-information">
          <div className="item-header-sale">
            <div className="list-tag-type">
              {listTag.map((item) => (
                <TagType typeId={item.id} typeName={item.name} />
              ))}
            </div>
            <i>
              <IconInformation />
            </i>
          </div>
          <p className="item-sale-percent">Giảm {salePercent}%</p>
          <p className="item-order">
            Cho đơn hàng từ {formatMoney(orderPrice)} vnd
          </p>
          <div className="item-date-exprie">
            <span className="exprie-date">
              HSD: đến hết {exprieTime} ngày {exprieDate}
            </span>
            {isSelect ? (
              <Button type="primary" className="btn-select" onClick={() => { }}>
                Đã Chọn
              </Button>
            ) : (
              <Button type="primary" className="" onClick={handleClick}>
                Chọn
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSaleType;
