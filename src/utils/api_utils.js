

let API_BASE_URI = "api.openweathermap.org/data/2.5/forecast"

/**
 * The API key used to perform requests against the web server.
 */
let API_KEY = "e82a616aad6ba90991c052ef3fe3624d"

let request = {

  getCityByNameURL: (name) => {
    return '${API_BASE_URI}?q=${name}&mode=json&appid=${API_KEY}'
  }

}


export default request;
