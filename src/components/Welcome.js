import React, {Component} from 'react';
import Button from './Button';

const Welcome = (props) => {
    return ( 
        <div className="welcome">
            <h1>Welcome to Brainstorm</h1>
            <Button name="Get Started" clicked={() => { props.history.push({ pathname: `/setup`}) }}/>
        </div>
     );
}

export default Welcome;