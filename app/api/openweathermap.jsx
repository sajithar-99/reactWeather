var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ce3b7cba4cc65231928ff294dc588094&units=metric';
//KEY: ce3b7cba4cc65231928ff294dc588094

module.exports = {
  getTemp: function(city) {
    var encodedcity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedcity}`;
    return axios.get(requestUrl).then(function(res) { 
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        {
          return res.data.main.temp;
        }
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
