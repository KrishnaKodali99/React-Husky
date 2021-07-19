import React from 'react'

const CustomButton:React.FC<{action:Function, caption: string, usage: string}> = ({action, caption, usage}) => {

    let myButton = null;
    if(usage.toLowerCase() === "success"){
        myButton = (<button className="btn btn-success" onClick={() => action()}>{caption}</button>)
    }
    else if(usage.toLowerCase() === "submit"){
        myButton = (<button type="submit">{caption}</button>)
    }
    else{
        myButton = (<button className="btn btn-danger" onClick={() => action()}>{caption}</button>)
    }

    return(
        <span>{myButton}</span>
    )

}

export default CustomButton;