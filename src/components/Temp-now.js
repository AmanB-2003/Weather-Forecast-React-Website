import React, { useEffect, useState } from "react";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

function Temp() {

    const [pos , setpos] = useState(
        {city: "default", 
        latitude : 51.509865, 
        longitude : -0.118092}
    );

    const [dataa , setdata] = useState({
        info : "",
        city : "Getting Data...",
        temperature : "Getting Data...",
        weather : "Getting Data..."});
    

    let datetime = new Date();
    console.log(datetime);
    let d = datetime.toDateString();
    let t = datetime.toLocaleTimeString();


    function success(position) {
        if(pos.city === "default"){setpos({
                city      : "updated",
                latitude  : position.coords.latitude,
                longitude : position.coords.longitude
            })}

         console.log(position);
   }
   function failure(){
       console.log("Sorry,couldn't find your geolocation :(");
   }
    navigator.geolocation.getCurrentPosition(success,failure);
    /* can't access */
    // function possi() {      
    //     setpos({
    //         latitude : 200,
    //         longitude : 300
    //     });
    // }
    
    console.log(pos.latitude);
   //var link = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=07e01ed7ecaa04760395963bb57fe948`
   var link = `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&appid=07e01ed7ecaa04760395963bb57fe948&units=metric`
 
   // useEffect() for performing something after rendering
  //    useEffect ( () => {  } )
 
    if (dataa.weather === "Getting Data...") {     /* fetch ONLY ONCE */
    fetch(link)
            .then((response) => response.json())
                .then(data => { setdata({
                    info : data,
                    city    : data.city.name,
                    temperature : data.list[0].main.temp,
                    weather : data.list[0].weather[0].main});
                        console.log(data) }); 
        }

 

//console.log(dataa.weather[0].main);


    return <div>
        <p>{d} {t}</p>
        <a href={link} >link</a>
        <p>{dataa.city}</p>
        <p>{dataa.temperature} F</p>
        <p>{dataa.weather}</p>
    </div>
   
    
}

export default Temp;