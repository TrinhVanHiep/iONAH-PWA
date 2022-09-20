import React from 'react'
import Vector_cirle_green from "./Images/Svg/Vector_cirle_green"
import Img_test from "./Images/image 47.png"
import defaultClasses from './BannerCategoryProduct.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
export default function Banner_Category_Products() {
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.wrapper__banner__category__products}>
            <div className={classes.wrapper__banner__category__products__content}>
                <div><Vector_cirle_green /></div>
                <p>Tủ lạnh Ngăn đá dưới</p>
            </div>
            <div className={classes.wrapper__banner__category__products__img}>
                <img src={Img_test} />
            </div>
        </div>
    )
}
