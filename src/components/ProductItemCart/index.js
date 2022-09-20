import React from 'react'
import Test from "./Images/Frame 253.png"
import Plus from "./Images/Svg/Plus"
import Minus from "./Images/Svg/Minus"
import Clear from "./Images/Svg/Clear_X"
import { useWindowSize } from "@magento/peregrine";
import defaultClasses from './ProductItemCart.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
export default function Product_Item_Cart() {
    const windowSize = useWindowSize();
    const width=windowSize.innerWidth
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.wrapper__all__item__cart}>
            <div className={classes.wrapper__item__cart}>
                <input id={classes.checkbox} type="checkbox" />
                <div className={classes.wrap__name__and__img__product}>
                    <img src={Test} alt="" />
                    <div >
                        <p>Casper RM-520VT 462 </p>
                        <span>Còn 01 sản phẩm</span>
                        <select id={classes.dropdown}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div className={classes.wrap__quantity_and_price}>
                    {width < 951 ? <div className={classes.wrap__quantity_and_price__mobile}>
                        <div className={classes.wrap__quantity}>
                            <i><Plus /></i>
                            <span>01</span>
                            <i><Minus /></i>
                        </div>
                        <span className={classes.wrap__price}>25.500.000đ</span>
                    </div> : <>
                        <div className={classes.wrap__quantity}>
                            <i><Plus /></i>
                            <span>01</span>
                            <i><Minus /></i>
                        </div>
                        <span className={classes.wrap__price}>25.500.000đ</span>
                    </>}
                    <i id={classes.close}><Clear /></i>
                </div>
            </div>
        </div>
    )
}


