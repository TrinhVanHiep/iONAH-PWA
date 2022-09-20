import React from 'react';
import Satisfied from './images/Satisfied';
import Unsatisfied from './images/Unsatisfied';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './OrderSuccess.module.css';
function OrderSuccess() {
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.orderDetail}>
            <h3 className={classes.orderDetailTitle}>Chi tiết đơn hàng</h3>
            <div className={classes.orderDetailPay}>
                <div className={classes.orderDetailInput}>
                    <span className={classes.orderDetailInputText}>
                        Thanh toán thành công
                    </span>
                </div>
                <div>
                    <div className={classes.orderDetailInput}>
                        <span className={classes.orderDetailInputText}>
                            Đơn hàng Đã được thanh toán qua
                        </span>{' '}
                        <span>thẻ ATM nội địa</span>
                    </div>
                </div>
            </div>
            <div className={classes.orderDetailSingle}>
                <div className={classes.singleContent}>
                    <h4 className={classes.singleTitle}>Mã đơn hàng</h4>
                    <span className={classes.singleNumber}>163513854315</span>
                    <a href="!#" className={classes.singleWatch}>
                        Xem đơn hàng
                    </a>
                </div>
                <p className={classes.singleTime}>
                    Đơn hàng sẽ được giao vào: Thứ 6, ngày 26/08
                </p>
            </div>
            <div className={classes.orderDetailEvaluate}>
                <p className={classes.evaluateText}>
                    Anh/ Chị có hài lòng về trải nghiệm mua hàng?
                </p>
                <div className={classes.evaluateSelect}>
                    <div className={classes.evaluateSelectVote}>
                        <div className={classes.evaluateSelectImg}>
                            <Satisfied />
                        </div>
                        <span
                            className={`${classes.evaluateSelectVoteText} ${
                                classes.textSatisfied
                            }`}
                        >
                            Hài lòng
                        </span>
                    </div>
                    <div className={classes.evaluateSelectVote}>
                        <div className={classes.evaluateSelectImg}>
                            <Unsatisfied />
                        </div>
                        <span  className={`${classes.evaluateSelectVoteText} ${
                                classes.textUnsatisfied
                            }`}>
                            Không Hài Lòng
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;
