import React from 'react';
import Button from './Button';

class Welcome  extends Component {
    render() {
    return ( 
        <div class="welcome">
            <h1>Welcome to Brainstorm</h1>
            <Button name="Get Started" />
        </div>
     );
}
}
export default Welcome;