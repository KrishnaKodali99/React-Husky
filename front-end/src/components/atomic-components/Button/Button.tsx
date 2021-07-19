import React from 'react'

const CustomButton = ({action, caption, usage}:any): any => {

    let myButton = null;
    if(usage.toLowerCase() === "success"){
        myButton = (<button className="btn btn-success" onClick={() => action()}>{caption}</button>)
    }else{
        myButton = (<button className="btn btn-danger" onClick={() => action()}>{caption}</button>)
    }

    return(
        <span>{myButton}</span>
    )

}

export default CustomButton;