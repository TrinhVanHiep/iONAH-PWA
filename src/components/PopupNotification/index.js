import React from 'react'
import Check_circle from './Images/Svg/Check_circle'
import defaultClasses from './PopupNotification.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
export default function Popup_notifi() {
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.wrap__all__popup}>
            <div className={classes.Popup__background}></div>
            <div className={classes.Wrapper__popup__notifi}>
                <div className={classes.Wrapper__popup__notifi__icon}>
                    <Check_circle />
                </div>
                <div className={classes.Wrapper__popup__notifi__content}>
                    <p>Sản phẩm thêm vào giỏ hàng thành công </p>
                    <div className={classes.Wrapper__popup__notifi__button}>
                        <button id={classes.button__secondary}>Xem giỏ hàng</button>
                        <button id={classes.button__primary}>Tiếp tục mua sắm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
