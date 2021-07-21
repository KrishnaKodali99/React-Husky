import React from 'react'
import './Footer.css'

const Footer:React.FC<{website:string, company:string}> = ({website, company}) => {

    return (
        <div className="app-footer">
            <p>Footer content goes here, {website}, &copy; {company}</p>
        </div>
    );

}

export default Footer