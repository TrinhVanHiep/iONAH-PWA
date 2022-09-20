import React from 'react'
import Satisfied from "./images/Satisfied";
import Unsatisfied from "./images/Unsatisfied";
import "./OrderSuccess.css"
function OrderSuccess() {
  return (
    <div className="order-detail">
        <h3 className="order-detail--title">Chi tiết đơn hàng</h3>
        <div className="order-detail--pay">
          <div className="order-detail--input">
            <span className="order-detail--input__text">
              Thanh toán thành công
            </span>
          </div>
          <div>
            <div className="order-detail--input">
              <span className="order-detail--input__text">
                Đơn hàng Đã được thanh toán qua
              </span>{" "}
              <span>thẻ ATM nội địa</span>
            </div>
          </div>
        </div>
        <div className="order-detail--single">
          <div className="single-content">
            <h4 className="single-title">Mã đơn hàng</h4>
            <span className="single-number">163513854315</span>
            <a href="!#" className="single-watch">
              Xem đơn hàng
            </a>
          </div>
          <p className="single-time">
            Đơn hàng sẽ được giao vào: Thứ 6, ngày 26/08
          </p>
        </div>
        <div className="order-detail--evaluate">
            <p className="evaluate-text">
              Anh/ Chị có hài lòng về trải nghiệm mua hàng?
            </p>
            <div className="evaluate-select">
              <div className="evaluate-select--vote">
                <div className="evaluate-select--vote__img">
                  <Satisfied/>
                </div>
                <span className="evaluate-select--vote__text text-satisfied">
                  Hài lòng
                </span>
              </div>
              <div className="evaluate-select--vote">
                <div className="evaluate-select--vote__img">
                  <Unsatisfied/>
                </div>
                <span className="evaluate-select--vote__text text-notsatisfied">
                  Không Hài Lòng
                </span>
              </div>
            </div>
        </div>
      </div>
  )
}

export default OrderSuccess