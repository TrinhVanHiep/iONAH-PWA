import React from 'react'
import Iphone from "./Image/Rectangle 624.png"
import defaultClasses from "./ItemSlideShow.module.css";
import { useStyle } from '@magento/venia-ui/lib/classify';
export default function Item_Slide() {
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.wrapper__item__slide}>
            <img src={Iphone} alt="" />
            <a>Iphone</a>
        </div>
    )
}
