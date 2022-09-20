import React from 'react'
import Edit from "../../image/icons_edit.svg";
import "./AddressItem.css";
function AddressItem({index,handleChange,item,dataChoose,showEditIcon=true}) {
  return (
    <div class="address-radio">
    <input
      key = {index}
      type="radio"
      name="site_name"
      id={index}
      value={JSON.stringify(item)}
      checked={dataChoose === JSON.stringify(item)}
      onChange={(e) => handleChange(e)}
      />
      <label for={index} className="address-radio_content">
      <div className="address-radio_content__name">
      <span className="text-title">{item.stt}</span>
      <div className="btn">
      <button>Địa chỉ mặc định</button>
      <button>Địa chỉ nhà riêng/ chung cư</button>
      </div>
      </div>
    
      <span className="text-label">{item.name}</span>
      <span className="text-content">Địa chỉ:  {item.address}</span>
      <span className="text-content">Số điện thoại: {item.phone}</span>
    </label>
    {showEditIcon && 
    <img src={Edit} alt="icon-edit" />
    }
  </div>
  )
}

export default AddressItem