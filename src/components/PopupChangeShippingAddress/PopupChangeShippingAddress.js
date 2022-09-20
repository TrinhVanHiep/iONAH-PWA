import React, { useEffect, useState } from "react";
import "./PopupChangeShippingAddress.css";
import Edit from "../../image/icons_edit.svg";
import Button from "../Button/button";
import Close from "../../image/close.svg";
import AddressItem from "../AddressItem";
const data = [
  {
    id:1,
    stt: "Địa chỉ 1",
    name: "Tên người nhận",
    address:
      " Rectory Cottage, Farleigh Court Road, Warlingham, CR6 9PX",
    phone: "(+84) 913 502 413",
  },
  {
    id:2,
    stt: "Địa chỉ 2",
    name: "Tên người nhận",
    address:
      " Rectory Cottage, Farleigh Court Road, Warlingham, CR6 9PX",
    phone: "(+84) 913 502 413",
  },
];
function PopupChangeShippingAddress({onClose,showPopup,lstData=data,}) {

  const [show, setShow] = useState(true);
  const [dataChoose, setDataChoose] = useState(data && JSON.stringify(data[0]));

  const handleChange = (e) => {
    setDataChoose(e.target.value)
  }

  const closeHandler = (e) => {
    setShow(false);
    onClose(false);
  };

  useEffect(() => {
    setShow(showPopup);
  }, [showPopup]);

  return (
    <>{show &&
    <div className="shipping-address-popup-overlay">
    <div className="shipping-address-popup">
      <h4 className="text-title">Địa chỉ đã lưu</h4>
      <div className="shipping-address">
      {data.map((el,index) => (
        <AddressItem index={index} handleChange={handleChange} item={el} dataChoose={dataChoose}/>
      ))}
      </div>
      <span className="add-address">+ Thêm địa chỉ mới</span>
      <div className="lst-btn">
      <Button type = 'secondary'>Hủy</Button>
      <Button>Lưu thay đổi</Button>
      </div>
      <img src={Close} alt="close" className='close-icon' onClick = {closeHandler}/>
    </div>
    </div>}</>
  );
}

export default PopupChangeShippingAddress;
