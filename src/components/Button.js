import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Button = (props) => {
    return ( 
        <button onClick={props.clicked}>{props.name}</button>
     );
}
 
export default Button;