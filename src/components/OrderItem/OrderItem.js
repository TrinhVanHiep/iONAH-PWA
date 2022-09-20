import React, { Fragment } from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './OrderItem.module.css';
import FeaturedImage from './images/featured-image.png';
function OrderItem() {
    const classes = useStyle(defaultClasses);
    return (
        <Fragment>
            <div className={classes.orderItem}>
                <div className={classes.orderItemHeader}>
                    <h3>Đơn hàng #6164135</h3>
                    <h3>Đang giao</h3>
                </div>
                <div className={classes.orderItemElement}>
                        <img src={FeaturedImage} />
                    <div className={classes.orderItemElementInfo}>
                        <h3>Máy giặt cửa trước 12.5KG (WF-125I140BGB)</h3>
                        <div className={classes.orderItemElementParam}>
                            <p>Công suất</p>
                            <p>Dung tích</p>
                        </div>
                    </div>
                    <div className={classes.orderItemElementAmount}>
                        <div className={classes.amount}>01</div>
                        <div className={classes.price}>00.000.000</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default OrderItem;
