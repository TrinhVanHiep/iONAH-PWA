import React from 'react'
import Vector_cirle_green from "./Images/Svg/Vector_cirle_green"
import Img_test from "./Images/image 47.png"
import "./styles.css"
export default function Banner_Category_Products() {
    return (
        <div className='wrapper__banner__category__products'>
            <div className='wrapper__banner__category__products-content'>
                <div><Vector_cirle_green /></div>
                <p>Tủ lạnh Ngăn đá dưới</p>
            </div>
            <div className='wrapper__banner__category__products-img'>
                <img src={Img_test} />
            </div>
        </div>
    )
}
