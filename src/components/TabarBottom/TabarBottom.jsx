import React from "react";
import defaultClasses from "./TabarBottom.module.css";

const TabarBottom = () => {
    const classes = useStyle(defaultClasses, props.classes);
    return (
        <div className={classes.containerTab}>
            
        </div>
    )
}

export default TabarBottom