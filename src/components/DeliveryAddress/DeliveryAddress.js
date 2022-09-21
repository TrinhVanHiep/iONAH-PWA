import React, { useState } from 'react'
import AddressItem from '../AddressItem';
import Button from "../Button";
import "./DeliveryAddress.css";
function DeliveryAddress() {
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
  const [dataChoose, setDataChoose] = useState(data && JSON.stringify(data[0]));

  const handleChange = (e) => {
    setDataChoose(e.target.value)
  }
  return (
    <div className="delivery-address">
        <div className="delivery-address_top">
        <h3>Địa chỉ giao hàng</h3>
        <Button btnType="secondary">+ Thêm địa chỉ</Button>
        </div>
        <div className="delivery-address_content">
        {data.map((el,index) => (
        <div className="delivery-address-item">
        <AddressItem index={index} handleChange={handleChange} item={el} 
        dataChoose={dataChoose} 
        showEditIcon={false}/>
        <div className='action'>
            <span className="action-edit">Chỉnh sửa</span>
            <span className="action-delete">Xóa</span>
        </div>
        </div>
      ))}
        </div>
    </div>
  )
}

export default DeliveryAddress