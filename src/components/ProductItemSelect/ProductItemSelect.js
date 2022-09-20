import React from "react";
import itemImg from "./img/tivi.png";
import { formatMoney } from "../../common/commonFunctions";
import AddButon from "../AddButton/AddButton";
import defaultClasses from './ProductItemSelect.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

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
        <AddButon
          label={"Thêm vào so sánh"}
          onClickButton={handleAddToSearch}
        />
      </div>
    </div>
  );
};

export default ProductItemSelect;
