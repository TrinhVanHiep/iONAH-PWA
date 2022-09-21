import React, { useEffect, useState } from 'react';
import "./styles.scss";
// import star from "../../image/Star.png";
import star from "../../asset/img/Star.png";
// import heartCard from "../../image/heart_card.png"
import heartCard from "../../asset/img/heart_card.png"
import bank from "../../asset/img/bank.png";
// import compare from "../../image/Compare.png";
import compare from "../../asset/img/Compare.png";
import Button from '../Button';
import layers from "../../asset/img/layers.png"
import iconStock from "../../asset/img/radix-icons_value-none.png";
import { useWindowSize } from '@magento/peregrine';
import defaultClasses from "./ProductItem.module.css"

const ProductItem = (props) => {
    const classes = useStyle(defaultClasses, props.classes);
    const windowSizes = useWindowSize();
    const {dataCard} = props
    return (
        <div className={classes.productCard} onClick={props.onPress}>
            <div className={classes.productTop}>
                <Button className={classes.buttonSale}>Trả góp 10%</Button>
                <Button className={classes.buttonSale}>Giảm 5.000.000đ</Button>
            </div>
            {dataCard?.image ? (
                <div className={classes.productNotImage}></div>
            ) : dataCard?.numberProduct ? (
                <img className={classes.productImage} src=""></img>
            ) : (
                <div className={classes.productStock}>
                    <img className={classes.productImage} src=""></img>
                    <div className={classes.stockPop}>
                        <img className={classes.imageStock} src={iconStock}></img>
                        <p className={classes.nameStock}>Hết hàng</p>
                    </div>
                </div>
            )}
            <p className={classes.productName}>Casper RM-520VT </p>
            <div className={classes.productPriceSale}>
                <div className={classes.priceLeft}>
                    <p className={classes.priceSale}>19,250,000 </p>
                    <p className={classes.salePercent}>-25%</p>
                </div>
                <div className={classes.productEvaluate}>
                    <span className={classes.numberEvaluate}>5
                    </span>
                    <img className={classes.starEvaluate} src={star}></img>
                    <p className={classes.totalEvaluate}>(45)</p>
                </div>
            </div>
            <div className={classes.productPrice}>
                <p className={classes.price}>18,490,000</p>
                <Button className={classes.productLike}>
                    <img className={classes.iconLike} src={heartCard}></img>
                </Button>
            </div>
            <div className={classes.productDes}>
                <Button className={classes.buttonDes}>55 inches</Button>
                <Button className={classes.buttonDes}>4k</Button>
                <Button className={classes.buttonDes}>2 Năm bảo hành</Button>
            </div>
            <div className={classes.bank}>
                <Button className={classes.buttonBank}>
                    <img className={classes.iconBank} src={bank}></img>
                </Button>
                <Button className={classes.buttonBank}>
                    <img className={classes.iconBank} src={bank}></img>
                </Button>
                <Button className={classes.buttonBank}>
                    <img className={classes.iconBank} src={bank}></img>
                </Button>
                <Button className={classes.buttonBank}>
                    <img className={classes.iconBank} src={bank}></img>
                </Button>
            </div>
            <p className={classes.textDes}>Ưu đãi đến 1.1 triệu khi mở thẻ TPBANK EVO</p>
            <div className={classes.productSl}>
                <div style={windowSizes.innerWidth > 600 ? {width: (24/50)*300 } : {width: (24/50)*180 }} className={classes.slDb}>
                    <img className={classes.imageSl} src={layers}></img>
                    <p className={classes.textSl}>Đã bán 24/50 </p>
                </div>
            </div>
            <div className={classes.bankPay}>
                <Button className={classes.buttonPay}>
                    <img className={classes.iconPay} src={bank}></img>
                </Button>
                <Button className={classes.buttonPay}>
                    <img className={classes.iconPay} src={bank}></img>
                </Button>
                <Button className={classes.buttonPay}>
                    <img className={classes.iconPay} src={bank}></img>
                </Button>
                
            </div>
            <div className={classes.productBottom}>
                <img className={classes.iconTich} src={compare}></img>
                <p className={classes.textSs}>So sánh</p>
                <Button className={classes.buttonMn}>Mua ngay</Button>
            </div>
        </div>
    )
}

export default ProductItem;