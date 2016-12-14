import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (



<div className="list-item"  onClick={this.props.handleClickBeer(this.props.webID)}>
    <h2 className="name">{this.props.name}</h2>
    <img src={this.props.pic} alt={this.props.name}/>

</div>
    );
  }
}

export default ListItem;
