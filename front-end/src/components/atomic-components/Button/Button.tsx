import React from 'react'
import './Button.css'

const CustomButton:React.FC<{action:Function, caption: string, usage: string}> = ({action, caption, usage}) => {

    let myButton = null;
    if(usage.toLowerCase() === "success"){
        myButton = (<button className="btn success-background my-2" onClick={() => action()}>{caption}</button>)
    }
    else if(usage.toLowerCase() === "submit"){
        myButton = (<button className="btn success-background my-2" type="submit">{caption}</button>)
    }
    else{
        myButton = (<button className="btn danger-background my-2" onClick={() => action()}>{caption}</button>)
    }

    return(
        <span>{myButton}</span>
    )

}

export default CustomButton;