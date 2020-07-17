const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

var location = process.argv[2];

if (location) {

  geocode(location, (error, {latitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return console.log(error);
        }

        console.log(location);
        console.log(forecastData);
      })
})

} else {
  console.log("Please enter a location to get the weather.")
}




