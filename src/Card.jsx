import React from "react";

function Card(props){
    return(
        <div className="card-container">
            <a href={props.newPage} target="_blank"><img  src={props.src} alt=""/></a>
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <h4><b>{props.userName}</b></h4>

            </div>
        </div>
    )
}

export default Card;