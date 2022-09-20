import React, { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown/Dropdown'
import Close from "../Product_Item_Cart/Images/Svg/Clear_X"
import "./styles.css"
export default function Index() {
    const [value, setShow] = useState()
  return (
    <div className='wrapper__popup__chosen__delivery__time'>
    <div className='Popup__background'></div>
    <div className='wrapper__popup__chosen__delivery__time__content'>
        <div>
            <h1>Thay đổi địa chỉ</h1>
            <i><Close /></i>
        </div>
        <div className='wrapper__popup__chosen__delivery__time__content__dropdown'>
            <div>
                <span>Địa chỉ chi tiết</span>
                <div className='wrap__all__dropdown'>
                    <div className='wrap__hour'>
                        <Dropdown label="Nhập địa chỉ" value={value} height="32px" width="459px" backgourd="#F7F7F7"/>
                    </div>
                    <div className='wrap__date__month'>
                        <Dropdown label="Quận" value={value} height="32px" width="222px" backgourd="#F7F7F7"/>
                        <Dropdown label="Phường" value={value} height="32px" width="221px" backgourd="#F7F7F7"/>
                        <Dropdown label="Thành phố" value={value} height="32px" width="221px" backgourd="#F7F7F7"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='wrapper__popup__chosen__delivery__time__content__button'>
            <Button className='button__popup__chosen__delivery__time' children="Trở Lại" type='secondary' />
            <Button className='button__popup__chosen__delivery__time' children="Lưu thay đổi" type='primary' />
        </div>
    </div>
</div>
  )
}
