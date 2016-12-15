import React,{Component} from 'react';
import './OneBeer.css';

class OneBeer extends Component{
  render() {
    return (
      <div className="OneBeerContainer">
        <div className="left">
          <h1> {this.props.OneBeer.name}</h1>
          <img src={this.props.OneBeer.labels.medium} alt={this.props.OneBeer.name} />
        </div>
        <div className="right">
          <h2><u>Type:</u> </h2>
          <p>{this.props.OneBeer.style.shortName}</p>
          <h2><u>ABV:</u></h2><p> {this.props.OneBeer.abv}</p>
          <h2><u>Organic: </u></h2><p>{this.props.OneBeer.isOrganic}</p>
          <h2><u>Desc.:</u> </h2><p>{this.props.OneBeer.description}</p>
        </div>
      </div>
    )
  }
}

export default OneBeer;
