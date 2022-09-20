import React from "react";
import itemImg from "./img/tivi.png";
import { formatMoney } from "../../common/commonFunctions";
import defaultClasses from './ProductItemSelect.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Button from "../Button/button";

const ProductItemSelect = ({
  itemId,
  img,
  itemName,
  itemPrice,
  handleAddToSearch,
}) => {
  const classes = useStyle(defaultClasses);

  return (
    <div className={classes.productItemsSelect}>
      <div className={classes.itemImg}>
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className={classes.itemsDetail}>
        <div className={classes.itemInformation}>
          <p className={classes.itemName}>{itemName}</p>
          <span className={classes.itemPrice}>{formatMoney(itemPrice)} vnd</span>
        </div>
        <Button type="secondary">Thêm vào so sánh</Button>
      </div>
    </div>
  );
};

export default ProductItemSelect;
