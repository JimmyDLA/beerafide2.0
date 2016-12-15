import React from 'react';
import './OneBeerItem.css';

const OneBeerItem = (props) => (
  <div>
    <div id="nameNpic">
      <h1>{props.name}</h1>
      <img src={props.pic} alt={props.name}/>
    </div>
    <div id="allInfo">
      <h2>Type of Beer:</h2>
      <p>{props.type}</p>
      <h2>Description:</h2>
      <p>{props.desc}</p>
      <h2>ABV:</h2>
      <p>{props.abv}</p>
      <h2>Organic?:</h2>
      <p>{props.organic}</p>
    </div>
  </div>
)

export default OneBeerItem
