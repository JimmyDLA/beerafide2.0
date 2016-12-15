import React,{Component} from 'react';
import './OneBeer.css';

class OneBeer extends Component{
  render() {
    return (
      <div className="OneBeerContainer">
        <h1>Name:</h1><p> {this.props.OneBeer.name}</p>
        <img src={this.props.OneBeer.labels.medium} />
        <h2>Type: </h2> <p>{this.props.OneBeer.style.shortName}</p>
        <h2>ABV:</h2><p> {this.props.OneBeer.abv}</p>
        <h2>Organic: </h2><p>{this.props.OneBeer.isOrganic}</p>
        <h2>Desc.: </h2><p>{this.props.OneBeer.description}</p>
      </div>
    )
  }
}

export default OneBeer;
