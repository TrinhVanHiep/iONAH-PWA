import React from "react";
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './productCmsInfo.module.css';

const ProductCmsInfo = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const cmsProductInfo = '';

    return (
        <div className={classes.root}>
            <div dangerouslySetInnerHTML={{ __html: cmsProductInfo }}/>
        </div>
    )
}

export default ProductCmsInfo;