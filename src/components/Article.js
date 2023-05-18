import React from "react";


function Article({title,date="January 1, 1970",preview,minutes}){
    let coffee = <span></span>
    for(let i=0; i >= Math.round(minutes/5); i++){
        coffee.append("☕")
    }
    console.log(coffee)
    return(
        <div id="Article">
            <h3>{title}</h3>
            <small>{date}  *  {minutes} minutes</small>
            <p>{preview}</p>
        </div>

    )
}

export default Article