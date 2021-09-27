const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e21bc8d11bcbb21c52e76ff84dacb77f&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like it is " +
          body.current.feelslike +
          " degrees"
      );
    }
  });
};

module.exports = forecast;
