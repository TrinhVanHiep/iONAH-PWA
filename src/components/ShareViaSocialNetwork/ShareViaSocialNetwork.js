import React, { useEffect, useState } from 'react'
import "./ShareViaSocialNetwork.css";
import Facebook from "./image/facebook.png";
import Link from "./image/link.png";
import Mgs from "./image/messenger.png";
// import Button from '../Button';
import Close from "../../image/close.svg";
function ShareViaSocialNetwork({onClose, showPopup}) {
    const [show, setShow] = useState(true);

  const closeHandler = (e) => {
    setShow(false);
    onClose(false);
  };

  useEffect(() => {
    setShow(showPopup);
  }, [showPopup]);


  return (
    <>{show && 
    <div className="overlay">
    <div className="share-box"
      >
        <h3>Chia sẻ qua mạng xã hội</h3>
        <div className="lst-box">
            <a className="item" href='#'>
                <img src={Facebook} alt="Facebook" />
                <span>Facebook</span>
            </a>
            <a className="item" href='#'>
                <img src={Link} alt="Messenger" />
                <span>Messenger</span>
            </a>
            <a className="item" href='#'>
                <img src={Mgs} alt="Copylink" />
                <span>Copy link</span>
            </a>
        </div>
        <div className="share-btn">
            {/* <Button type = 'secondary'>Trở lại</Button>
            <Button>Chia sẻ</Button> */}
        </div>
        <img src={Close} alt="close" className='close-icon' onClick = {closeHandler}/>
    </div>
    </div>
    }</>
  )
}

export default ShareViaSocialNetwork