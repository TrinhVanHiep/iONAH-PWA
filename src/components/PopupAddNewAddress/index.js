import React, { useState } from 'react'
import Button from '../Button'
import Close from "../ProductItemCart/Images/Svg/Clear_X"
import Edit from "./Images/Svg/Group"
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './PopupAddNewAddress.module.css';
import Dropdown from '../Dropdown/index';
import Input from "../Input/index"
import { set } from 'lodash';
export default function Index() {
    const [value, setShow] = useState()
    const classes = useStyle(defaultClasses);
  return (
    <div className={classes.wrapper__popup__change__address}>
    <div className={classes.Popup__background}></div>
   <div className={classes.wrapper__popup__change__address__content__all}>
   <div>
            <h1>Thêm địa chỉ mới</h1>
            <i><Close /></i>
        </div>
   <div className={classes.wrapper__popup__change__address__content}>
        <div className={classes.wrapper__popup__change__address__content__inner}>
               <div className={classes.content__top}>
               <b>Tên người nhận</b>
               <Input placeholder='Nguyễn Văn A' onChange={setShow} className={classes.inputAddNewAddress}/>
               </div>
               <div className={classes.content__mid}>
                   <b>Địa chỉ chi tiết</b>
                   <div>
                   <Input placeholder='Nhập địa chỉ' onChange={setShow} className={classes.inputAddNewAddress}/>
                   <div className={classes.wrapper__list__dropdown}>
                   <Dropdown label="Quận" value={value} newClassName={classes.dropdown__add__new__address}/>
                   <Dropdown label="Phường" value={value} newClassName={classes.dropdown__add__new__address}/>
                   <Dropdown label="Thành phố" value={value} newClassName={classes.dropdown__add__new__address}/>
                   </div>
                   </div>
               </div>
               <div className={classes.content__bottom}>
                  <div>
                  <b>Số điện thoại</b>
                  <Input placeholder='Nhập số  điện thoại' onChange={setShow} className={classes.inputAddNewAddress} />
               </div>

               <div className={classes.list__radio}>
                <b>Loại địa chỉ</b>
                <div><input type="radio"/><span>Nhà riêng/ Chung cư</span></div>
                <div><input type="radio"/><span>Cơ quan/ Công ty</span></div>
               </div>

               <div>
                <input type="checkbox"/>
                <span>Đặt làm địa chỉ mặc định</span>
               </div>
                  </div>  
        </div>
    </div>
        <div className={classes.wrapper__popup__change__address__content__button}>
            <Button className={classes.button__popup__change__address} children="Hủy" btnType='secondary' />
            <Button className={classes.button__popup__change__address} children="Lưu thay đổi" btnType='primary' />
        </div>
   </div>
</div>
  )
 }
