import React from "react";
import defaultClasses from './SelectSaleType.module.css';
import itemImg from "./img/momo.png";
import { IconInformation } from "../../asset/Icons/Icon";
import TagType from "../TagType/TagType";
import Button from "../Button";
import { formatMoney } from "../../common/commonFunctions";
import { useStyle } from '@magento/venia-ui/lib/classify';

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
  const classes = useStyle(defaultClasses);

  const handleClick = () => {
    if (handleSelectSaleType) {
      handleSelectSaleType();
    }
  };

  return (
    <div className={classes.selectSaleType}>
      <div className={classes.itemImg}>
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className={classes.itemsDetail}>
        <div className={classes.itemInformation}>
          <div className={classes.itemHeaderSale}>
            <div className={classes.listTagType}>
              {listTag.map((item) => (
                <TagType typeId={item.id} typeName={item.name} />
              ))}
            </div>
            <i>
              <IconInformation />
            </i>
          </div>
          <p className={classes.itemSalePercent}>Giảm {salePercent}%</p>
          <p className={classes.itemOrder}>
            Cho đơn hàng từ {formatMoney(orderPrice)} vnd
          </p>
          <div className={classes.itemDateExprie}>
            <span className={classes.exprieDate}>
              HSD: đến hết {exprieTime} ngày {exprieDate}
            </span>
            {isSelect ? (
              <Button type="primary" className={classes.btnSelect} onClick={() => { }}>
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
    </div >
  );
};

export default SelectSaleType;
