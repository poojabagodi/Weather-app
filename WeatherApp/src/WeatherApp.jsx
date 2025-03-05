import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    };
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Weather App by Pooja</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}