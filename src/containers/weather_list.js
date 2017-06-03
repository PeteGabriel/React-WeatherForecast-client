import React from 'react';

import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends React.Component{

  /**
   * Format a response into a collumn.
   */
  _renderWeather(cityData){
    const cityName = cityData.city.name;
    const temperature = cityData.list.map(elem => elem.main.temp).map(cTemp => cTemp - 273);
    const pressure = cityData.list.map(elem => elem.main.pressure);
    const humidity = cityData.list.map(elem => elem.main.humidity);

    return (
      <tr key={cityName}>
        <td>
          {cityName}
        </td>
        <td>
          <Chart units="ºC" data={temperature} color={"red"} />
        </td>
        <td>
          <Chart units="hP" data={pressure} color={"purple"} />
        </td>
        <td>
          <Chart units="%" data={humidity} color={"blue"} />
        </td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºC)</th>
            <th>Pressure (hP)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this._renderWeather)}
        </tbody>
      </table>
    );
  }

}


function mapStateToProps(state){
  return {weather: state.weather} //has to do with the combineReducer's method
}

export default connect(mapStateToProps)(WeatherList);
