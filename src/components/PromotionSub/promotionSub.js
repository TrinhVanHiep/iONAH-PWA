import React from "react";
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './promotionSub.module.css';

const PromotionSub = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const content = '';

    return (
        <>
            <div className={classes.root}>
                <h3 className={classes.title}>Khuyến mãi</h3>
                <div className={classes.description}>
                    <div dangerouslySetInnerHTML={{ __html: content }}/>
                </div>
            </div>
        </>
    );
}

export default PromotionSub;