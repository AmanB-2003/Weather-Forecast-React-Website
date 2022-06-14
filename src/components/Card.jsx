import React from "react";

export default function Card(props){
    return <div className="Card" style={{backgroundColor: "lightblue"}}>
        <h3>{props.date}</h3>
        <img src={props.image}></img>
        <p>Humidity</p>
        <p>{props.humidity} %</p>
    </div>
}