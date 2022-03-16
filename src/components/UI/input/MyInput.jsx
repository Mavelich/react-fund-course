import React from "react";
import classes from './MyInput.module.css';

const MyButton = (props) => {

    return (
        <input className={classes.myInput} {...props} />
    );
};

export default MyButton;