import React from "react";
import defaultClasses from './ProductItemsSuggest.module.css';
import itemImg from "./img/wash-machine.png";
import { formatMoney } from "../../common/commonFunctions";
import { useStyle } from '@magento/venia-ui/lib/classify';

const ProductItemsSuggest = ({
  itemId,
  img,
  itemName,
  itemCode,
  itemPrice,
  isSale,
  salePercent,
}) => {
  const classes = useStyle(defaultClasses);

  return (
    <div className={classes.productItemsSuggest}>
      <div className={classes.itemImg}>
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className={classes.itemsDetail}>
        <div className={classes.itemInformation}>
          <span className={classes.itemName}>{itemName} </span>
          <span className={classes.itemName}>({itemCode})</span>
          <br />
          <span className={classes.itemPrice}>{formatMoney(itemPrice)}</span>
          <br className={classes.breakLine} />
          {isSale ? (
            <>
              <span className={classes.itemOldPrice}>{formatMoney(itemPrice)}</span>
              <br className={classes.breakLine} />
              <span className={classes.itemSalePercent}>{salePercent}%</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductItemsSuggest;
