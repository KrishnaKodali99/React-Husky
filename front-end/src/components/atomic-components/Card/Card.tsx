import React from 'react';
import './Card.css';

const CustomCard:React.FC<{cardDetails:any, cardOrient:string, background:number}> = ({cardDetails, cardOrient, background}) => {

    let cardImage  = cardDetails.hasOwnProperty('image') ? 
        (
            <img src={cardDetails.image} alt={cardDetails.title} className="card-img mt-4 mt-md-5 px-4" />
        ) : ("")

    let cardContent = (
        <div className="card-body">
            <h4 className="card-title">{cardDetails.title}</h4>
            { cardDetails.hasOwnProperty('body') ? (<h4 className="card-text">{cardDetails.body}</h4> ) : "" }  
        </div>
    )
        

    let myCard = null;
    if(cardOrient.toLowerCase() === "left"){
        myCard = (
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    {cardImage}
                </div>
                <div className="col-sm-12 col-md-8">                    
                    {cardContent}
                </div>
            </div>
        )
    }
    else if(cardOrient.toLowerCase() === "right"){
        myCard = (
            <div className="row">                
                <div className="col-sm-12 col-md-8">                    
                    {cardContent}
                </div>
                <div className="col-sm-12 col-md-4">
                    {cardImage}
                </div>
            </div>
        )
    }
    else{
        myCard = (
            <div className="row"> 
                <div className="col">
                    <div>{cardImage}</div>
                    {cardContent}
                </div>
            </div>
        )
    }

    if(background === 1){
        return(
            <div className="card card-type-1">
                {myCard}
            </div>
        )
    }
    else{
        return(
            <div className="card card-type-2">
                {myCard}
            </div>
        )
    }
}

export default CustomCard;