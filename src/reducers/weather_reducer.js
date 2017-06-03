import {FETCH_WEATHER} from '../actions/index'


/**
 * This reducer will handle the fetch weather action.
 * The state is an array because we want to show the weather data
 * for more than one city.
 */

export default function(state = [], action){
  
  switch(action.type){
    case FETCH_WEATHER:
      //the data property has the data we care about
      //after the promise resolves.
      //By concatenating the arrays we are not mutating our state we are in fact
      //returning a new instance/piece of state
      return [action.payload.data, ...state];
  }

  return state;
}
