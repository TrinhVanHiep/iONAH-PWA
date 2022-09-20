import React from "react";
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './specification.module.css';

const Specifications = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const attributes = [
        {
            name: 'Mã sản phẩm',
            value: 'GSC-09IP25'
        },
        {
            name: 'Mã quốc gia',
            value: '8859608900142'
        },
        {
            name: 'Inverter/cơ:',
            value: 'Inverter'
        },
        {
            name: 'Loại chiều',
            value: '1 chiều'
        },
        {
            name: 'Môi chất lạnh',
            value: 'R32'
        },
        {
            name: 'Diện tích căn hộ',
            value: 'Dưới 15m2'
        },
        {
            name: 'Kích thước',
            value: '788 x 292 x 198'
        },
        {
            name: 'Nguồn điện',
            value: '220 - 240V/1P/150Hz'
        },
        {
            name: 'Remote',
            value: 'Remote'
        },
        {
            name: 'Độ ồn',
            value: '44 dB(A)'
        },
        {
            name: 'Năm ra mắt',
            value: '2022'
        },
        {
            name: 'Hãng',
            value: 'Casper'
        }
    ];

    const listAttribute = attributes?.map(attr => {
        return (
            <div className={classes.row}>
                <div className={classes.name}>{attr.name}</div>
                <div className={classes.value}>{attr.value}</div>
            </div>
        )
    })

    return (
        <div className={classes.root}>
            <h3 className={classes.heading}>
                Thông số kỹ thuật
            </h3>
            <div className={classes.content}>
                {listAttribute}
                <button style={{width: '100%', border: '1px solid #ccc', borderRadius: '8px', padding: '14px 16px'}}>Xem chi tiết thông số</button>
            </div>
        </div>
    );

}

export default Specifications;