import React from "react";

export default function Card(props){

    return <div className="col-sm-2">
    <div className="card border-0 " style={{ width: "100%"}}>
        <h3>{props.date}</h3>
        <img src={props.image}></img>
        <p>Humidity</p>
        <p>{props.humidity} %</p>
    </div>
    </div>
}