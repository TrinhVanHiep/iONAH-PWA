import React, { useEffect, useRef, useState } from "react";
import logoUser from "../../asset/img/logo_account.png";
import logo from "../../asset/img/logo.png";
import heart from "../../asset/img/heart.png";
import cart from "../../asset/img/cart.png";
import down from "../../asset/img/down.png";
import book from "../../asset/img/book.png";
import search from "../../asset/img/Search.png";
import { useWindowSize } from "@magento/peregrine";
import imageProduct from "../../asset/img/product-mn.png"
import defaultClasses from "./header.module.css";
import { useStyle } from "@magento/venia-ui/lib/classify";
import AccountTrigger from "@magento/venia-ui/lib/components/Header/accountTrigger";

const Header = (props) => {
    const classes = useStyle(defaultClasses, props.classes);
    const windowSizes = useWindowSize();
    const [scrollTop, setScrollTop] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [showSubOne , setShowSubOne] = useState(false);
    const [showSunTwo, setShowSubTwo] = useState(false);
    const header = useRef();
    useEffect(() => {
        const handleScroll = () => {
            let scrollTops = window.scrollY;
            setScrollTop(scrollTops)
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            setShowMenu(false)
        };
    }, []);
    const handleHoverItem = () => {
        setShowMenu(true);
    }
    const handleNotHoverItem = () => {
        setShowMenu(false);
        setShowSubTwo(false);
        setShowSubOne(false)
    }
    const handleHoverItemSub = () => {
        setShowSubOne(true)
    }
    const handleNotHoverItemSub = () => {
        setShowSubOne(false)
    }
    const handleHoverItemSubTwo = () => {
        setShowSubTwo(true)
    }
    return (
        <div className={classes.header} ref={header} onMouseLeave={() => handleNotHoverItem()}>
            {windowSizes.innerWidth > 800 ? (
                <div className={scrollTop > 57 ? classes.headerPos : classes.headerRe}>
                    <div className={classes.headerForm}>
                        {/* {scrollTop < 57 ? ( */}
                            <div className={scrollTop < 57 ?classes.headerTop: classes.visibleHidden}>
                                <button className={classes.textIonah}>V??? Ionah</button>
                                <button className={classes.textDT}>Tr??? Th??nh ?????i T??c C??ng Ionah</button>
                                <div className={classes.formUser}>
                                    <div className={classes.logoUser}>
                                        <img className={classes.imgLogoUser} src={logoUser}></img>
                                    </div>
                                    <div className={classes.welcom}>
                                        <p className={classes.textWelcom}>Welcome</p>
                                        {/* <p className={classes.signinRegister} > <span>Sign in</span> / <span>Register</span></p> */}
                                        <AccountTrigger />  

                                    </div>
                                </div>
                                <div className={classes.language}>
                                    <button className={classes.buttonEng}>ENG{" "}</button>
                                    <span className={classes.btG}>|</span>
                                    <button className={classes.buttonVn}>{" "}VN</button>
                                </div>
                            </div>
                        <div className={classes.headerBottom}>
                            <div className={classes.logo}>
                                <img className={classes.logos} src={logo}></img>
                            </div>
                            <div className={classes.headerBottomRight}>
                                <div className={classes.inputPrice}>
                                    <input
                                        className={classes.inputSearchPrice}
                                        placeholder="Xem gi??, t???n kho t???i:  H?? N???i"
                                    ></input>
                                    <button className={classes.buttonIconDown}>
                                        <img src={down} className={classes.dropDown}></img>
                                    </button>
                                </div>
                                <div className={classes.inputPrices}>
                                    <input
                                        className={classes.inputSearch}
                                        placeholder="H??m nay b???n c???n mua g???"
                                    ></input>
                                    <button className={classes.buttonIconSearch}>
                                        <img src={search} className={classes.iconSearch}></img>
                                    </button>
                                </div>
                                <button className={classes.buttonIcon}>
                                    <img src={book} className={classes.book}></img>
                                </button>
                                <button className={classes.buttonIcon}>
                                    <img src={heart} className={classes.heart}></img>
                                </button>
                                <button className={classes.buttonIcon}>
                                    <img src={cart} className={classes.cart}></img>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.menu}>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>Tivi</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>T??? L???nh</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>M??y L???nh</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>M??y Gi???t</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>Gia D???ng</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>B???p T???</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>??i???n Tho???i</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>L???c N?????c</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>N???i C??m</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenu}>N???i Chi??n</button>
                        <button onMouseEnter={() => handleHoverItem()} className={classes.textMenuDg}>????? Gia D???ng Nh?? B???p</button>
                    </div>
                    {showMenu === true ? (
                        <div className={classes.megaMenu}>
                        <ul className={classes.subMenuFirst}>
                            <li onMouseEnter={() => handleHoverItemSub()}>
                                <a className={classes.textSubMenu}>N???u n?????ng, ch??? bi???n</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSub()} >
                                <a className={classes.textSubMenu}>Nh?? c???a, ??i???n ????m</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSub()} >
                                <a className={classes.textSubMenu}>L??m ?????p, s???c kho???</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSub()} >
                                <a className={classes.textSubMenu}>Xay ??p pha ch???</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSub()} >
                                <a className={classes.textSubMenu}>Ch??m s??c m??? v?? b??</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSub()} >
                                <a className={classes.textSubMenu}>D???ng c??? b??n ??n</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSub()} >
                                <a className={classes.textSubMenu}>D???ng c??? s???a ch???a</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSub()} >
                                <a className={classes.textSubMenu}>B???o qu???n th???c ph???m</a>
                            </li>
                        </ul>
                        {showSubOne === true ? (
                            <ul className={classes.subMenuTwo}>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>L?? n?????ng</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>L?? vi s??ng</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>ch???o</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>M??y l???c n?????c</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>N???i c??m ??i???n</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>L?? vi s??ng</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>ch???o</a>
                            </li>
                            <li onMouseEnter={() => handleHoverItemSubTwo()}>
                            <a className={classes.textSubMenu}>M??y l???c n?????c</a>
                            </li>
                        </ul>
                        ) : null}
                        {showSunTwo === true ? (
                            <div className={classes.subMenuThird}>
                            <ul className={classes.subMenuBrand}>
                                <li>
                                <p className={classes.titleBrand}>Brand</p>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>N???u n?????ng, ch??? bi???n</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>Nh?? c???a, ??i???n ????m</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>L??m ?????p, s???c kho???</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>Xay ??p pha ch???</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>Ch??m s??c m??? v?? b??</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>D???ng c??? b??n ??n</a>

                                </li>
                                <li>
                                <a className={classes.textSubMenu}>D???ng c??? s???a ch???a</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>B???o qu???n th???c ph???m</a>
                                </li>
                            </ul>
                            <ul className={classes.subMenuModel}>
                                <li>
                                <p className={classes.titleModel}>Model</p>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>N???u n?????ng, ch??? bi???n</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>Nh?? c???a, ??i???n ????m</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>L??m ?????p, s???c kho???</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>Xay ??p pha ch???</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>Ch??m s??c m??? v?? b??</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>D???ng c??? b??n ??n</a>

                                </li>
                                <li>
                                <a className={classes.textSubMenu}>D???ng c??? s???a ch???a</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>B???o qu???n th???c ph???m</a>
                                </li>
                            </ul>
                            <ul className={classes.subMenuSize}>
                                <li>
                                <p className={classes.titleSize}>Size</p>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>21 inch</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>32 inch</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>43 inch</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>50 inch</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>55 inch</a>
                                </li>
                                <li>
                                <a className={classes.textSubMenu}>60 inch</a>
                                </li>
                            </ul>
                            <div className={classes.productMenu}>
                                <img className={classes.imgProductMenu} src={imageProduct}></img>
                                <p className={classes.nameProductMenu}>Smart Tivi Samsung 4K Crystal UHD 65 inch UA65AU8100 </p>
                                <p className={classes.textProductMenu}>Fringilla est ullamcorper eget nulla</p>
                            </div>
                            </div>
                        ) : null}
                    </div>
                    ): null}
                </div>
            ) : (
                <div className={scrollTop > 57 ? classes.headerPosMoblie : classes.headerMobile}>
                    <div className={classes.logo}>
                        <img className={classes.logos} src={logo}></img>
                    </div>
                    <div className={classes.inputPrices}>
                        <img src={search} className={classes.iconSearch}></img>
                        <input
                            className={classes.inputSearch}
                            placeholder="H??m nay b???n c???n mua g???"
                        ></input>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
