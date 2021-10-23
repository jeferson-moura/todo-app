import React from "react";

export default function WelcomeCard(props){
    return(
        <div className="WelcomeMessage"> 
            <h1>{props.title}</h1>
            <span>{props.message}</span>
        </div>
       
    )
}