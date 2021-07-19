import React from 'react';

const CustomCard = ({cardDetails, cardOrient}:any):any => {

    let cardImage  = cardDetails.hasOwnProperty('image') ? 
        (
            <img src={cardDetails.image} alt={cardDetails.title} className="card-img"
            style={{ width: "120px", height: "120px" }} />
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
    return(
        <div className="card">
            {myCard}
        </div>
    )
}

export default CustomCard;