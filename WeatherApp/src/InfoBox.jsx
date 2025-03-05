import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const Init_URL="https://media.istockphoto.com/id/930883224/photo/winter-morning-scene-rural-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DZPnPff0OWGmpUpxJVtkMDTWDdvuY6vC4Hn26cYZDZc=";
   
   const Hot_URL="https://media.istockphoto.com/id/1150050227/photo/heat-wave-of-extreme-sun-and-sky-background-hot-weather-with-global-warming-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=0VzHWJbNnynCDxu8IIf6bz_SQyzj0ZSkSMx14aJokeE=";
   const COLD_URL="https://images.unsplash.com/photo-1634938938692-b9d4150efd6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   const Rain_URL="https://media.istockphoto.com/id/547033564/photo/rain-flows-down-from-a-roof-down.webp?a=1&b=1&s=612x612&w=0&k=20&c=JjzhyKKywplhXhNiXslYVMiOhuAftqZhUN8zjMtlkzc=";


    return (
        <div className="InfoBox">
           
    <div className="cardcontainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 
          ?Rain_URL :(info.temp>20) 
          ?Hot_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 
          ?<ThunderstormIcon />:(info.temp>20) 
          ?< WbSunnyIcon/> : < AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p> The weather can be described as  {info.weather} and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}