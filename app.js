import forecast from './utils/forecast.js';
import geoCode from './utils/geocode.js'

const address = process.argv[2]

if (!address) {
  console.log('Please provide a location')
} else {
  geoCode(address, (data, error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  
  console.log(`City: ${data.city}`);
  console.log(`Latitude: ${data.lat}`);
  console.log(`Longitude: ${data.lon}`);

  forecast(data.lat,data.lon,(data,error)=>{
  if (error) {
    console.log(error.message)
    return;
  }

  console.log(`The temperature is ${data.temperature} degrees and it feels like ${data.feelsLike} degrees`)
})
});
}



// const url =
//   "https://api.weatherstack.com/current?access_key=7de6328fa3e6192f16fd7b27cf02084b&query=20.5937,78.9629";

// try {
//   const responseWeather =await fetch(url);
//   if (!responseWeather.ok) {
//     throw new Error(`HTTP error Status :- ${responseWeather.status}`);
//   }
//     const dataWeather = await responseWeather.json()

//     const temp = dataWeather.current.temperature;
//     const feelsLike = dataWeather.current.feelslike;

//     console.log(
//       `The temperature is ${temp} degrees and it feels like ${feelsLike} degrees`,
//     );

// } catch (error) {
//   console.log(error.message);
// }