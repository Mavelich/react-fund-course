import React from "react";
import classes from './MyInput.module.css';

const MyButton = React.forwardRef((props, ref) => {

    return (
        <input ref={ref} className={classes.myInput} {...props} />
    );
});

export default MyButton;