import React from 'react';
import './ListItem.css';

const ListItem = (props) => (
  <div className="list-item" onClick={() => props.handleClickBeer(props.webID)}>
    <h2 className="name">{props.name}</h2>
    <img src={props.pic} alt={props.name} />
  </div>
)

export default ListItem;
