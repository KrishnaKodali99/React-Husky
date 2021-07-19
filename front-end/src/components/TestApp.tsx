import React, { Component } from 'react'
import CustomButton from './atomic-components/Button/Button';
import CustomCard from './atomic-components/Card/Card';
import LoginForm from './atomic-components/Login-Form/Login-Form';

class TestApp extends Component {

    myFunct = ():any => {
        console.log("CLICK");
    }

    myLoginSubmit = (values: any): any => {
        console.log(values);
    }

    cardDets = {
        image: "https://picsum.photos/200",
        title: "My Custom Card",
        body: (<span><h1>This is the body inside h5 tag</h1></span>)
    }

    render():any {
        return(
            <div>
                <CustomButton action={this.myFunct} caption={"Test Button"} usage={"Success"}></CustomButton>
                <div className="container">
                    <CustomCard cardDetails = {this.cardDets} cardOrient="center" />
                </div>
                <LoginForm loginSubmitHandler={this.myLoginSubmit} />
            </div>
        );
    }
}

export default TestApp;