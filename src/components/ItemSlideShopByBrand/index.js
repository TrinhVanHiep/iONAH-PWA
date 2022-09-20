import React from 'react'
import Iphone from "./Image/Rectangle 624.png"
import "./styles.css"
export default function Item_Slide() {
    return (
        <div className='wrapper__item__slide'>
            <img src={Iphone} alt="" />
            <a>Iphone</a>
        </div>
    )
}
