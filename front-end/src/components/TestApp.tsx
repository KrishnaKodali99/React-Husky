import React, { Component } from 'react'
import CustomButton from './atomic-components/Button/Button';

class TestApp extends Component {

    myFunct = ():any => {
        console.log("CLICK");
    }

    render():any {
        return(
            <div>
                <CustomButton action={this.myFunct} caption={"Test Button"} usage={"Success"}></CustomButton>
            </div>
        );
    }
}

export default TestApp;