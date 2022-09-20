import React from 'react'
import Check_circle from './Images/Svg/Check_circle'
import "./styles.css"
export default function Popup_notifi() {
    return (
        <div className='wrap__all__popup'>
            <div className='Popup__background'></div>
            <div className='Wrapper__popup__notifi'>
                <div className='Wrapper__popup__notifi__icon'>
                    <Check_circle />
                </div>
                <div className='Wrapper__popup__notifi__content'>
                    <p>Sản phẩm thêm vào giỏ hàng thành công </p>
                    <div className='Wrapper__popup__notifi__button'>
                        <button id='button__secondary'>Xem giỏ hàng</button>
                        <button id='button__primary'>Tiếp tục mua sắm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
