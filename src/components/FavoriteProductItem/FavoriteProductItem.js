import React from 'react'
import Product1 from "./image/p1.png";
import "./FavoriteProductItem.css";
// import Button from '../Button';
function FavoriteProductItem({data}) {
    // const data = {
    //     img: Product1,
    //     title: "Casper RM-520VT 462 lít Nhiều cửa",
    //     content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    //     price: "00.000.000",
    //     option: [
    //       {
    //         name:"Color",
    //         value: ["red", "blue"],
    //       },
    //       {
    //         name:"Size",
    //         value: ["small", "large", "medium"],
    //       },
    //       {
    //         name:"Wattage",
    //         value: ["1", "2"],
    //       },
    //     ],
    //   }
  return (
    <div className="product-item">
        <div className="product-item_image">
            <img src={data.img} alt="img" />
        </div>
        <div className="product-item_content">
        <div className="content-inner">
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <div className="option">
            {data.option.map(item=> (
            <select>
                <option value="" disabled selected>{item.name}</option>
                {item.value.map(i => (
                    <option value={i}>{i}</option>
                ))}
            </select>
             ))}
            </div>
            <h4 className='price'>{data.price}</h4>
        </div>
        {/* <Button>Thêm giỏ hàng</Button> */}
        </div>
    </div>
  )
}

export default FavoriteProductItem