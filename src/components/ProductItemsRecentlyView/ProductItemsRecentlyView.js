import React from "react";
import defaultClasses from './ProductItemsRecentlyView.module.css';
import itemImg from "../../asset/img/ProductItemsRecentlyView/tivi.png";
import { IconRateStar } from "../../asset/Icons/Icon";
import AddButon from "../AddButton/AddButton";
import { formatMoney } from "../../common/commonFunctions";
import { useStyle } from '@magento/venia-ui/lib/classify';

const ProductItemsRecentlyView = ({
  totalRate,
  price,
  currentRate,
  itemId,
  handleAddToCompare,
}) => {
  const classes = useStyle(defaultClasses);

  const renderRate = (
    <div className={classes.itemRate}>
      {[...Array(totalRate)].map((item, index) => {
        const listRate = index + 1;
        return (
          <i
            key={index}
            className={`${classes.rateIcon} ${listRate < currentRate || listRate === currentRate ? classes.ratedIcon : ""
              }`}
          >
            <IconRateStar />
          </i>
        );
      })}
    </div>
  );

  return (
    <div className={classes.itemsRecentlyView}>
      <img src={itemImg} alt="item-img" />
      <div className={classes.itemInformation}>
        {renderRate}
        <div className={classes.itemPrice}>
          <span>{formatMoney(price)} vnd</span>
        </div>
        <AddButon
          label={"Thêm vào so sánh"}
          onClickButton={handleAddToCompare}
        />
      </div>
    </div >
  );
};

export default ProductItemsRecentlyView;
