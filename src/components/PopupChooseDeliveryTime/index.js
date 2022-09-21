import React, { useState } from 'react'
import Close from "../ProductItemCart/Images/Svg/Clear_X"
import Dropdown from "../Dropdown/index"
import Button from "../Button/index"
import defaultClasses from './PopupChooseDelivery.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
export default function Index() {
    const [value, setShow] = useState()
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.wrapper__popup__chosen__delivery__time}>
            <div className={classes.Popup__background}></div>
            <div className={classes.wrapper__popup__chosen__delivery__time__content}>
                <div>
                    <h1>Chọn thời gian nhận hàng</h1>
                    <i><Close /></i>
                </div>
                <div className={classes.wrapper__popup__chosen__delivery__time__content__dropdown}>
                    <div>
                        <span>Địa chỉ</span>
                        <div className={classes.wrap__all__dropdown}>
                            <div className={classes.wrap__hour}>
                                <Dropdown label="Giờ" value={value}/>
                            </div>
                            <div className='wrap__date__month'>
                                <Dropdown label="Ngày" value={value} />
                                <Dropdown label="Tháng" value={value} />
                            </div>
                        </div>
                    </div> 
                </div>
                <div className={classes.wrapper__popup__chosen__delivery__time__content__button}>
                    <Button className={classes.button__popup__chosen__delivery__time} children="Trở Lại" Btntype='secondary' />
                    <Button className={classes.button__popup__chosen__delivery__time} children="Lưu thay đổi" Btntype='primary' />
                </div>
            </div>
        </div>
    )
}
