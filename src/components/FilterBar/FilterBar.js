import { useStyle } from '@magento/venia-ui/lib/classify';
import React, { Fragment, useState } from 'react';
import defaultClasses from './FilterBar.module.css';
function FilterBar() {
    const classes = useStyle(defaultClasses);
    const [active, setActive] = useState();
    const listFilter = [
        'Tất cả',
        'Đang xử lý(0)',
        'Đang giao(0)',
        'Đã giao(0)',
        'Đã hủy(0)'
    ];
    return (
        <Fragment>
            <div className={classes.filterBar}>
                <ul className={classes.filterBarList}>
                    {listFilter.map((el, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setActive(index)}
                                style={
                                    active === index
                                        ? { color: '#1E24C0' }
                                        : { color: '#000000' }
                                }
                            >
                                {el}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
}

export default FilterBar;
