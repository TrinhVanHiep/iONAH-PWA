import React, { useState } from 'react'
import Polygon from "./Images/Polygon 1"
import defaultClasses from './Dropdown.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
export default function Dropdown({ label, data, setValueChosen,value,newClassName }) {
    const [show, setShow] = useState(false)
    const HandleChange = (el) => {
        setValueChosen(el.value)
        setShow(false)
    }
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.wrapper__dropdown}>
            {/* {
                label !== null || label !== undefined && <label >Choose </label>
            } */}

            <div className={classes.dropdown__inner}>
                <div className={`${classes.dropdown__inner__wrap} ${newClassName}`} >
                    <div onClick={(e) => setShow(true)}>
                        {value !== undefined ? value : label}
                        <i><Polygon /></i>
                    </div>
                    {show === true && <div className={classes.list__data__dropdown}>
                        {
                            data.map((el, index) =>
                                <p key={index} onClick={(e) => HandleChange(el)}>{el.value}</p>
                            )
                        }
                    </div>}
                </div>
            </div>
        </div>
    )
}
