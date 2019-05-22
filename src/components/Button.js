import React from 'react';
import classes from '../Global.module.css'

const Button = (props) => {
    return ( 
        <button className={classes.button} onClick={props.clicked}>{props.name}</button>
     );
}
 
export default Button;