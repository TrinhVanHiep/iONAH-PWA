import React from 'react'
import Slider from "react-slick";
import Samsung from "../image/sam_sung.png";
import Apple from "../image/apple.png";
import Casper from "../image/casper.png";
import Philip from "../image/philips.png";
import Panasonic from "../image/panasonic.png";
import Daikin from "../image/daikin.png";
import Toshiba from "../image/toshiba.png";
import LG from "../image/lg.png";
import Sharp from "../image/sharp.png";
import ArrowLeft from "./image/ArrowLeft.png";
import ArrowRight from "./image/ArrowRight.png";
function SliderCustom() {
    const defaultData = [
        [
            {img:Samsung},
            {img:Apple},
            {img:Casper},
            {img:Philip},
            {img:Panasonic},
            {img:Daikin},
            {img:Toshiba},
            {img:LG},
            {img:Sharp},
            {img:Casper},
        ],
        [
            {img:Samsung},
            {img:Apple},
            {img:Casper},
            {img:Philip},
            {img:Panasonic},
            {img:Daikin},
            {img:Toshiba},
            {img:LG},
            {img:Sharp},
            {img:Casper},
        ],
        [
            {img:Samsung},
            {img:Apple},
            {img:Casper},
            {img:Philip},
            {img:Panasonic},
            {img:Daikin},
            {img:Toshiba},
            {img:LG},
            {img:Sharp},
            {img:Casper},
        ],
    ]
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    const data = [1,2,3]
  return (
    <Slider {...settings}>
    {defaultData.map((el,index) => (
        <div className="slide-content" key={index}>
          {el.map((item,index)=>(
            <img src={item.img} alt="image" key={index}/>
          ))}
        </div>
      ))}
    </Slider>
  )
}

export default SliderCustom


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="icon-arow"  width="62px" height="62px"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
    <img src={ArrowLeft} alt="icon-arow" width="62px" height="62px"/>
    </div>
  );
}