import React from 'react';

import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'


/**
 * Functional Component since we dont need any fancy stuff
 */

/*
{
 width: int,
 data: [],
 height: int,
 color: ""
}
 */
export default (props) => {
  return (
    <div>
      <Sparklines height={props.height || 120} width={props.width || 180} data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}


function average(data){
  let avg = data.reduce((acc,cur) => acc + cur);
  return Math.round(avg / data.length);
}
