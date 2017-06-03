
import axios from 'axios'

/**
 * Base URL to perform a request against the web-server
 */
let API_BASE_URI = "http://api.openweathermap.org/data/2.5/forecast"

/**
 * The API key used to perform requests against the web server.
 */
let API_KEY = "e82a616aad6ba90991c052ef3fe3624d"


function getCityByNameURL(name){
    return `${API_BASE_URI}?q=${name}&mode=json&appid=${API_KEY}`
}




/**
 * For the given city name, fetch weather data related to it.
 */
export function fetchWeather(cityName){
  const url = getCityByNameURL(cityName);

  const request = axios.get(url);
  console.log(request)

  return {
    //type of the action
    type: FETCH_WEATHER,
    //'body' content of the action
    payload: request
  }
}

export const FETCH_WEATHER = 'FETCH_WEATHER';
