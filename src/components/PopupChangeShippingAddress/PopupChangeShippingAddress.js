import React, { useEffect, useState } from "react";
import "./PopupChangeShippingAddress.css";
import Edit from "../../image/icons_edit.svg";
// import Button from "../Button";
import Close from "../../image/close.svg";
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
        <div class="address-radio">
        <input
          key = {index}
          type="radio"
          name="site_name"
          id={index}
          value={JSON.stringify(el)}
          checked={dataChoose === JSON.stringify(el)}
          onChange={(e) => handleChange(e)}
          />
          <label for={index} className="address-radio_content">
          <div className="address-radio_content__name">
          <span className="text-title">{el.stt}</span>
          <div className="btn">
          <button>Địa chỉ mặc định</button>
          <button>Địa chỉ nhà riêng/ chung cư</button>
          </div>
          </div>
        
          <span className="text-label">{el.name}</span>
          <span className="text-content">Địa chỉ:  {el.address}</span>
          <span className="text-content">Số điện thoại: {el.phone}</span>
        </label>
        <img src={Edit} alt="icon-edit" />
      </div>
      ))}
      
      </div>
      <span className="add-address">+ Thêm địa chỉ mới</span>
      <div className="lst-btn">
      {/* <Button type = 'secondary'>Hủy</Button>
      <Button>Lưu thay đổi</Button> */}
      </div>
      <img src={Close} alt="close" className='close-icon' onClick = {closeHandler}/>
    </div>
    </div>}</>
  );
}

export default PopupChangeShippingAddress;
