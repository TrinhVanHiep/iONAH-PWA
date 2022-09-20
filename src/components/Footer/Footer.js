import React, { useEffect, useState } from 'react'
import Visa from "./Image/Image/image 129.png"
import Mtcard from "./Image/Image/image 130.png"
import Atm from "./Image/Image/Group.png"
import Vnpay from "./Image/Image/image 132.png"
import Momo from "./Image/Image/image 131.png"
import Facebook from "./Image/Image/image 126.png"
import Youtube from "./Image/Image/image 127.png"
import Zalo from "./Image/Image/image 128.png"
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './Footer.module.css';
import { useWindowSize } from "@magento/peregrine";
export default function Footer() {
    const windowSize = useWindowSize();
    let width=windowSize.innerWidth;
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.wrapper__footer}>
            <div className={classes.wrapper__footer__content} >


                <div className={classes.wrapper__footer__top}>
                    {width < 1471 ? <div className={classes.wrap__content__text}>
                        <div className={classes.wrapper__footer__top__support__client}>
                            <b>Hỗ trợ khách hàng </b>
                            <a>Hotline 1900 6503</a>
                            <a>Câu hỏi thường gặp</a>
                            <a>Gửi yêu cầu hỗ trợ</a>
                            <a>Hướng dẫn đăng ký & đặt hàng</a>
                            <a>Cách thức vận chuyển</a>
                            <a>Trung tâm bảo hành</a>
                            <a>Hướng dẫn trả góp</a>
                            <a>Gửi ý kiến phản hồi</a>
                            <a>Báo lỗi bảo mật </a>
                        </div>
                        <div className={classes.wrapper__footer__top__shopping__online}>
                            <b>Mua hàng trực tuyến</b>
                            <a>Ưu đãi ngành hàng</a>
                            <a>Ưu đãi độc quyền</a>
                            <a>Chương trình khuyến mại </a>
                        </div>
                        <div className={classes.wrapper__footer__top__account__and__community}>
                            <b>Tài khoản và cộng đồng</b>
                            <a>Tài khoản của tôi</a>
                            <a>Theo dõi đơn hàng</a>
                            <a>Sản phẩm yêu thích</a>
                            <a>iONAH members</a>
                        </div>
                        <div className={classes.wrapper__footer__top__about__ionah}>
                            <b>Về iONAH</b>
                            <a>Giới thiệu iONAH</a>
                            <a>Tuyển dụng</a>
                            <a>Chính sách bảo mật thông tin</a>
                            <a>Chính sách bảo mật thanh toán</a>
                            <a>Giải quyết khiếu nại</a>
                            <a>Điều khoản sử dụng</a>
                            <a>Bán hàng cùng iONAH</a>
                            <a>Điều kiện vận chuyển</a>
                        </div>
                    </div> : <>
                        <div className={classes.wrapper__footer__top__support__client}>
                            <b>Hỗ trợ khách hàng </b>
                            <a>Hotline 1900 6503</a>
                            <a>Câu hỏi thường gặp</a>
                            <a>Gửi yêu cầu hỗ trợ</a>
                            <a>Hướng dẫn đăng ký & đặt hàng</a>
                            <a>Cách thức vận chuyển</a>
                            <a>Trung tâm bảo hành</a>
                            <a>Hướng dẫn trả góp</a>
                            <a>Gửi ý kiến phản hồi</a>
                            <a>Báo lỗi bảo mật </a>
                        </div>
                        <div className={classes.wrapper__footer__top__shopping__online}>
                            <b>Mua hàng trực tuyến</b>
                            <a>Ưu đãi ngành hàng</a>
                            <a>Ưu đãi độc quyền</a>
                            <a>Chương trình khuyến mại </a>
                        </div>
                        <div className={classes.wrapper__footer__top__account__and__community}>
                            <b>Tài khoản và cộng đồng</b>
                            <a>Tài khoản của tôi</a>
                            <a>Theo dõi đơn hàng</a>
                            <a>Sản phẩm yêu thích</a>
                            <a>iONAH members</a>
                        </div>
                        <div className={classes.wrapper__footer__top__about__ionah}>
                            <b>Về iONAH</b>
                            <a>Giới thiệu iONAH</a>
                            <a>Tuyển dụng</a>
                            <a>Chính sách bảo mật thông tin</a>
                            <a>Chính sách bảo mật thanh toán</a>
                            <a>Giải quyết khiếu nại</a>
                            <a>Điều khoản sử dụng</a>
                            <a>Bán hàng cùng iONAH</a>
                            <a>Điều kiện vận chuyển</a>
                        </div>
                    </>}
                    <div className={classes.wrapper__footer__top__payment__methods}>
                        <b>Phương thức thanh toán</b>
                        <div className={classes.wrapper__footer__top__payment__methods__icon}>
                            {
                                width < 1026 ? <>
                                    <div className={classes.list_six_icon_top}>
                                        <img src={Visa} className={classes.visa}></img>
                                        <img src={Mtcard} className={classes.mtcard}></img>
                                        <img src={Atm} className={classes.atm}></img>
                                        <img src={Vnpay} className={classes.vnpay}></img>
                                        <img src={Momo} className={classes.momo}></img>
                                        <img src={Mtcard} className={classes.mtcard}></img>
                                    </div>
                                    <div className={classes.list_six_icon_bottom}>
                                        <img src={Visa} className={classes.visa}></img>
                                        <img src={Mtcard} className={classes.mtcard}></img>
                                        <img src={Atm} className={classes.atm}></img>
                                        <img src={Vnpay} className={classes.vnpay}></img>
                                        <img src={Momo} className={classes.momo}></img>
                                        <img src={Mtcard} className={classes.mtcard}></img>
                                    </div>
                                </> : <>
                                    <img src={Visa} className={classes.visa}></img>
                                    <img src={Mtcard} className={classes.mtcard}></img>
                                    <img src={Atm} className={classes.atm}></img>
                                    <img src={Vnpay} className={classes.vnpay}></img>
                                    <img src={Momo} className={classes.momo}></img>
                                    <img src={Mtcard} className={classes.mtcard}></img>
                                    <img src={Visa}  className={classes.visa}></img>
                                    <img src={Mtcard} className={classes.mtcard}></img>
                                    <img src={Atm} className={classes.atm}></img>
                                    <img src={Vnpay} className={classes.vnpay}></img>
                                    <img src={Momo} className={classes.momo}></img>
                                    <img src={Mtcard} className={classes.mtcard}></img>
                                </>
                            }
                        </div>

                    </div>
                    <div className={classes.wrapper__footer__top__connect__with__me}>
                        <b>Kết nối với chúng tôi</b>
                        <div className={classes.wrapper__icon__connect__with__me}>
                            <a><img src={Facebook} /></a>
                            <a id={classes.youtube}><img src={Youtube} /></a>
                            <a id={classes.zalo}><img src={Zalo} /></a>
                        </div>
                    </div>
                </div>


                <div className={classes.wrapper__footer__mid}>
                    {width < 1151 ? <div className={classes.wrapper__content__left}>
                        <div className={classes.wrapper__footer__info}>
                            <p>Địa chỉ: tòa nhà IDMC, 21 Duy Tân, Cầu Giấy, Hà Nội</p>
                            <p>Email: info@ionah.com </p>
                            <p>Hotline: 1900 6503</p>
                            <p id={classes.fanpage}>Fanpage:<a> https://www.facebook.com/iONAH.VN</a> </p>
                        </div>
                        <div className={classes.wrapper__footer__certification}>
                            <p>Bản quyền C 2022 iONAH bảo lưu mọi quyền</p>
                            <p>Công ty Cổ phần iONAH  </p>
                            <p>Giấy ĐKKD: 0107009894 Ngày cấp 30/09/2015 </p>
                        </div>
                    </div> : <>
                        <div className={classes.wrapper__footer__info}>
                            <p>Địa chỉ: tòa nhà IDMC, 21 Duy Tân, Cầu Giấy, Hà Nội</p>
                            <p>Email: info@ionah.com </p>
                            <p>Hotline: 1900 6503</p>
                            <p id={classes.fanpage}>Fanpage:<a> https://www.facebook.com/iONAH.VN</a> </p>
                        </div>
                        <div className={classes.wrapper__footer__certification}>
                            <p>Bản quyền C 2022 iONAH bảo lưu mọi quyền</p>
                            <p>Công ty Cổ phần iONAH  </p>
                            <p>Giấy ĐKKD: 0107009894 Ngày cấp 30/09/2015 </p>
                        </div>
                    </>}
                    <div className={classes.wrapper__footer__introduce}>
                        <p>iONAH - Chuyên trang TMĐT dành riêng cho lĩnh vực điện máy, ứng dụng nền tảng công nghệ số giúp tối ưu hoá, rút ngắn thời gian mua sắm của khách hàng. Chúng tôi cam kết mang đến những sản phẩm chất lượng nhất, giá cả phù hợp nhất, giao hàng nhanh chóng và bảo mật thông tin tuyệt đối!</p>
                    </div>
                </div>


                <div className={classes.wrapper__footer__bottom}>
                    <a>Điều Khoản truy cập</a>
                    <i>|</i>
                    <a>Hỗ trợ đăng ký tài khoản</a>
                    <i>|</i>
                    <a>Bảo mật</a>
                    <i>|</i>
                    <a>Pháp lý</a>
                </div>


            </div>
            <div className={classes.wrapper__certification__bottom}>
                {width < 429 ? <>
                    <p>Giấy CNĐKKD: 0107009894</p>
                    <p> Ngày cấp 30/09/2015 </p>
                    <p>Cơ quan cấp : Phòng đăng ký kinh doanh Sở Kế hoạch và Đầu tư thành phố Hà Nội</p>
                </> : <>
                    <p>Giấy CNĐKKD: 0107009894 Ngày cấp 30/09/2015 </p>
                    <p>Cơ quan cấp : Phòng đăng ký kinh doanh Sở Kế hoạch và Đầu tư thành phố Hà Nội</p>
                </>}
            </div>
        </div>
    )
}
