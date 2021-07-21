import React from 'react'
import './Alert.scss'

const Alert:React.FC<{type:string, message:string}> = ({type, message}) => {

    if(type === "danger"){
        return (
            <div className="alert alert-danger" role="alert">
                {message}
            </div>
        )
    }
    else if(type === "info"){
        return (
            <div className="alert alert-info" role="alert">
                {message}
            </div>
        )
    }
    else if(type === "success"){
        return (
            <div className="alert alert-success" role="alert">
                {message}
            </div>
        )
    }
    else return (
        <div>
            <h1>Alert not working</h1>
        </div>
    )
}

export default Alert