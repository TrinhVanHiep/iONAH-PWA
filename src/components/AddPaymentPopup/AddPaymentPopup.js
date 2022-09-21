import { useStyle } from '@magento/venia-ui/lib/classify';
import React from 'react';
import Input from '../Input';
import defaultClasses from './AddPaymentPopup.module.css';
import cardpay from '../../asset/images/CardPay.png';
import Button from '../Button/button';
function AddPaymentPopup() {
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.addPaymentContainer}>
            <div className={classes.addPaymentBackgrd} />
            <div className={classes.addPaymentWrapper}>
                <div className={classes.addPaymentTitle}>
                    Thêm Thẻ Tín Dụng/ Ghi Nợ Quốc Tế
                </div>
                <div className={classes.addPaymentContent}>
                    <div className={classes.addPaymentLeftContent}>
                        <div className={classes.addPaymentInputTitle}>
                            Số thẻ
                        </div>
                        <Input
                            placeholder="VD: 0000 0000 0000 0000"
                            className={classes.addPaymentInput}
                        />
                        <div className={classes.addPaymentInputTitle}>
                            Tên in trên thẻ
                        </div>
                        <Input
                            placeholder="VD: NGUYEN VAN A"
                            className={classes.addPaymentInput}
                        />
                        <div className={classes.addPaymentInputTitle}>
                            Ngày hết hạn
                        </div>
                        <Input
                            placeholder="VD: 10/26"
                            className={classes.addPaymentInput}
                        />
                        <div className={classes.addPaymentInputTitle}>
                            Mã bảo mật
                        </div>
                        <Input
                            placeholder="VD: 000"
                            className={classes.addPaymentInput}
                        />
                    </div>
                    <div className={classes.addPaymentRightContent}>
                        <img src={cardpay} />
                    </div>
                </div>
                <div className={classes.addPaymentBtn}>
                    <div className={classes.btnWrapper}>
                        <Button type="secondary" className={classes.btnBack}>
                            Trở lại
                        </Button>
                    </div>
                    <div className={classes.btnWrapper}>
                        <Button type="primary" className={classes.btnBack}>
                            Xác nhận
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddPaymentPopup;
