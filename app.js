import request from "request";

const url =
  "https://api.weatherstack.com/current?access_key=7de6328fa3e6192f16fd7b27cf02084b&query=20.5937,78.9629";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `the current temp is ${response.body.current["temperature"]} and it feels like ${response.body.current["feelslike"]}`,
  );
  console.log(response.body.current.weather_descriptions[0])
});
