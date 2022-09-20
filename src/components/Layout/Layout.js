import React, { Children, useEffect, useState } from 'react'
// import Header from "../headers/Headers";
// import Footer from "../Footer/Footer";
import "./style.css";

function Layout({ children, showFooter = true }) {
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    setHeight(scrollTop)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <div class="page-container">
      {/* <Header heightsPage={height}/> */}
      {children}
      {/* {showFooter &&  <Footer/>} */}
    </div>
  )
}

export default Layout