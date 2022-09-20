import React, { useState } from 'react'
import Button from '../Button'
import Close from "../ProductItemCart/Images/Svg/Clear_X"
import Edit from "./Images/Svg/Group"
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './PopupChangeAddress.module.css';
import Dropdown from '../Dropdown';
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
               <Dropdown label="Ngày" value={value} height="32px" width="222px" backgourd="#F7F7F7"/>
               </div>
               <div className={classes.content__mid}>
                   <b>Tên người nhận</b>
                   <div>
                   <Dropdown label="Tháng" value={value} height="32px" width="221px" backgourd="#F7F7F7"/>
                   <div>
                   <Dropdown label="Tháng" value={value} height="32px" width="221px" backgourd="#F7F7F7"/>
                   <Dropdown label="Tháng" value={value} height="32px" width="221px" backgourd="#F7F7F7"/>
                   <Dropdown label="Tháng" value={value} height="32px" width="221px" backgourd="#F7F7F7"/>
                   </div>
                   </div>
               </div>
               <div className={classes.content__mid}>
                  <div>
                  <b>Số điện thoại</b>
                   <Dropdown label="Tháng" value={value} height="32px" width="221px" backgourd="#F7F7F7"/>
               </div>

               <div>
                <b>Loại địa chỉ</b>
                <div><input type="radio"/><span>Nhà riêng/ Chung cư</span></div>
                <div><input type="radio"/><span>Cơ quan/ Công ty</span></div>
               </div>
                  </div>
               <div>
               <i><Edit/></i>
               </div>   
        </div>
        <hr/>
    </div>
    <div className={classes.wrapper__popup__change__address__content}>
        <div className={classes.wrapper__popup__change__address__content__inner}>
      
        <input type="radio"/>
               <div className={classes.wrapper__all__content}>
               <div className={classes.content__top}>
               
               <span>Địa chỉ 1</span>
               <button>Địa chỉ mặc định</button>
               <button>Địa chỉ nhà riêng/ chung cư</button>
               
               </div>
               <div className={classes.content__bottom}>
                   <b>Tên người nhận</b>
                   <p>Địa chỉ: Rectory Cottage, Farleigh Court Road, Warlingham, CR6 9PX</p>
                   <p>Số điện thoại: (+84) 913 502 413</p>
               </div>
               </div>
               <div>
               <i><Edit/></i>
               </div>   
        </div>
        <hr/>
    </div>
    <div className={classes.add__new__address}>
           <button>
           <span>+</span>
            <span>Thêm địa chỉ mới</span>
           </button>
        </div>
        <div className={classes.wrapper__popup__change__address__content__button}>
            <Button className={classes.button__popup__change__address} children="Hủy" type='secondary' />
            <Button className={classes.button__popup__change__address} children="Lưu thay đổi" type='primary' />
        </div>
   </div>
</div>
  )
}
