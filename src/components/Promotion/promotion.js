import React from "react";
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './promotion.module.css';

const Promotion = props => {
    const classes = useStyle(defaultClasses, props.classes);
    
    return (
        <div className={classes.root}>
            <div className={classes.list}>
                <div className={classes.item}>
                    <h4 className={classes.name}>VNPay</h4>
                    <p className={classes.price}>Giảm 500.000đ</p>
                    <p className={classes.description}>Đồ điện tử, điện lạnh</p>
                </div>
                <div className={classes.item}>
                    <h4 className={classes.name}>VNPay</h4>
                    <p className={classes.price}>Giảm 500.000đ</p>
                    <p className={classes.description}>Đồ điện tử, điện lạnh</p>
                </div>
                <div className={classes.item}>
                    <h4 className={classes.name}>VNPay</h4>
                    <p className={classes.price}>Giảm 500.000đ</p>
                    <p className={classes.description}>Đồ điện tử, điện lạnh</p>
                </div>
            </div>
        </div>
    )
}

export default Promotion;