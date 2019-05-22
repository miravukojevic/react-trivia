import React, {Component} from 'react';
import Button from './Button';
import classes from '../Global.module.css'

const Welcome = (props) => {
    return ( 
        <div className={classes.Mira}>
            <h1>Welcome to Brainstorm</h1>
            <img className={classes.img} src={ require('./../brainstorm.png')}  width="150px" />
            <Button name="Get Started" clicked={() => { props.history.push({ pathname: `/setup`}) }}/>
        </div>
     );
}

export default Welcome;