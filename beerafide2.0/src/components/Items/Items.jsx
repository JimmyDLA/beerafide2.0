import React from 'react';
import ListItem from './../ListItem/ListItem';
import './Items.css';


const allBeers = (props) =>
  props.beerSearch.map ((beer, i) =>{
    if(!beer.labels){
      return(
        <div key={`ListItem${beer.name}${i}`} className="searchRes">
          <ListItem
            name={beer.name}
            pic="http://media.istockphoto.com/vectors/beer-bottles-set-vector-id493620840?k=6&m=493620840&s=170667a&w=0&h=KyV8eIvttoz2Y6n2RXo4ex1sqXjLZQbF5dThKk0UchQ="
            webID={beer.id}
            handleClickBeer={props.handleClickBeer}
          />
        </div>
      )
    }else {
        return(
          <div key={`ListItem${beer.name}${i}`} className="searchRes">
            <ListItem
              name={beer.name}
              pic={beer.labels.medium}
              webID={beer.id}
              handleClickBeer={props.handleClickBeer}
            />
          </div>
        )
      }
  })

const Items = props => (

  <div className="ItemContainer">
        {allBeers(props)}
    </div>
);


export default Items;
