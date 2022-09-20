import React from "react";
import FavoriteProductItem from "../FavoriteProductItem";
import "./FavoriteProduct.css";
import Product1 from "./image/p1.png";
import Product2 from "./image/p2.png";
// import Button from "../../component/Button";
function FavoriteProduct() {
    const data = [
      {
        img: Product1,
        title: "Casper RM-520VT 462 lít Nhiều cửa",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        price: "00.000.000",
        option: [
          {
            name:"Color",
            value: ["red", "blue"],
          },
          {
            name:"Size",
            value: ["small", "large", "medium"],
          },
          {
            name:"Wattage",
            value: ["1", "2"],
          },
        ],
      },
      {
        img: Product2,
        title: "Casper RM-520VT 462 lít Nhiều cửa",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        price: "00.000.000",
        option: [
          {
            name:"Color",
            value: ["red", "blue"],
          },
          {
            name:"Size",
            value: ["small", "large", "medium"],
          },
          {
            name:"Wattage",
            value: ["1", "2"],
          },
        ],
      },
      {
        img: Product1,
        title: "Casper RM-520VT 462 lít Nhiều cửa",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        price: "00.000.000",
        option: [
          {
            name:"Color",
            value: ["red", "blue"],
          },
          {
            name:"Size",
            value: ["small", "large", "medium"],
          },
          {
            name:"Wattage",
            value: ["1", "2"],
          },
        ],
      },
      {
        img: Product2,
        title: "Casper RM-520VT 462 lít Nhiều cửa",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        price: "00.000.000",
        option: [
          {
            name:"Color",
            value: ["red", "blue"],
          },
          {
            name:"Size",
            value: ["small", "large", "medium"],
          },
          {
            name:"Wattage",
            value: ["1", "2"],
          },
        ],
      },
    ]

  return (
    <div className="favorite-product">
      <div className="favorite-product_top">
        <h3>Sản phẩm yêu thích</h3>
        {/* <Button type="secondary">+ Thêm toàn bộ sản phẩm vào giỏ hàng</Button> */}
      </div>
      <div className="favorite-product_content">
        {data.map((el, index) => (
            <FavoriteProductItem data ={el}/>
        ))}
      </div>
    </div>
  );
}

export default FavoriteProduct;
