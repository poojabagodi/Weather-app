import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [err,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="33f01883b0a7e1f1b3bcef177bd68472";

    let getWeatherInfo= async()=>{
       try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
       }catch(err){
          throw err;
       }
    };
    



    let handleChange=(event)=>{
          setCity(event.target.value);
    };

    let handleSumbit= async(event)=>{
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
     let newinfo= await getWeatherInfo();
     updateInfo(newinfo);
       } catch(err){
           setError(true);
       }
    };
    return(
        <div className='SearchBox'>
            
            <form onSubmit={handleSumbit}>
               <TextField id="city" label="City Name"
                variant="outlined" required 
                 value={city} onChange={handleChange}/>
               <br></br>
                <br></br>
               
               <Button variant="contained" type='submit'>Search</Button>
               {err && <p style={{color:"red"}}>No such place exisits!</p>}
            </form>
        </div>
    );
}