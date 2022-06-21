import React, { useEffect, useState } from "react";
import Card from "./Card";
import Graph from "./Graph";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

let index = -2;       //can change value inside function  (global variable)
let expt ;

function createEntry(data){
    index = index + 1;
    let date = data.dt_txt.substring(6,10);
   
    if((index % 8) === 0  ){
        return <Card 
   key={data.dt}
   date={date}
   image = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
   humidity={data.main.humidity} 
   />
   }
  
   
}


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
        weather : "Getting Data...",
        icon : "",
        humidity : "Getting Data...",
        wind_speed : "Getting Data...",
        loaded : false
    });
    

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
    
   //var link = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=07e01ed7ecaa04760395963bb57fe948`
   var link = `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&appid=07e01ed7ecaa04760395963bb57fe948&units=metric`
 
   // useEffect() for performing something after rendering
  //    useEffect ( () => {  } )
 
    if (dataa.weather === "Getting Data...") {     /* fetch ONLY ONCE */
    fetch(link)
            .then((response) => response.json())
                .then(data => { setdata({
                    info : data.list,
                    city    : data.city.name,
                    temperature : data.list[0].main.temp,
                    weather : data.list[0].weather[0].main,
                    icon :   data.list[0].weather[0].icon ,
                    humidity : data.list[0].main.humidity,
                    wind_speed : data.list[0].wind.speed ,
                    loaded  : true
                });
                        console.log(data) });  
                        
            //   dataa.info.filter(function(item){
            //     return item.dt >
            //   })          
        }

 
         expt = dataa.info;
        dataa.loaded !== false ? console.log(dataa) : console.log("ERROR!!!!Couldn't load data :(");


    return <div>
        {
        dataa.loaded !== false  &&
        <div>
        <div className="row">
        <div className="card border-0 col-sm-4" >
        <div className="card-body">
        <p>{d} {t}</p>
        <h1>{dataa.city}</h1>
        <div className="row">
        <div>
        <h1>{dataa.temperature} <span>&#8451;</span> </h1>
        <h2>{dataa.weather}</h2>
        </div>
        <div>
        <img  src={`http://openweathermap.org/img/wn/${dataa.icon}@2x.png`}></img>
        </div>
        </div>
        <p>Humidity</p>
        <p>{dataa.humidity} %</p>
        <p>Wind speed</p>
        <p>{dataa.wind_speed} km/h</p>
        <div class="alert alert-primary">
        Please reload the page if it didn't update your location !
        </div>
        </div>
        <a style={{lineHeight : "50px" , fontWeight: "bold" , color: "black"}} href="">Github : AmanB-2003</a>
        </div>

            <div className="col-sm-8">
                <Graph datalist={dataa.info} />

                <div className="row" style={{ marginTop : "20px" , marginLeft : "40px"}}>
                    {dataa.info.map(createEntry)}
                </div>

            </div>
        
        </div>
        </div>
        }
    </div>
   
    
}

export default Temp;

export {expt} ;