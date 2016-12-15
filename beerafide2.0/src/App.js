import React, { Component } from 'react';
import Search from './components/Search/Search'
import AjaxAdapter from './AjaxHelper/AjaxAdapter';
import Items from './components/Items/Items';
import OneBeer from './components/OneBeer/OneBeer';
import OneBeerItem from './components/OneBeerItem/OneBeerItem'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchTerms: "",
      beerSearch: [],
      oneBeer: [],
      webID:"",
      showBeers: true,
      showOne: false
    }
  }
  showOne(showOne){
    if(this.state.showOne === true){
      return(
        <OneBeerItem
          OneBeerItem={this.state.oneBeer}
        />
      )
    }
  }

  showBeers(showBeers) {
    if (this.state.showBeers === true) {
      return (
        <Items
          beerSearch={this.state.beerSearch}
          handleClickBeer={(event) => this.handleClickBeer(event)}
        />
      )
    }
  }

  searchBeers() {
    AjaxAdapter.beerSearch(this.state.searchTerms)
    .then((data) => {
      console.log(data)
      this.setState({
        beerSearch: data.data
      })
    })
  }

  handleSearchSubmit() {
    this.searchBeers()
    this.setState({
      showBeers: true,
      showOne: false
    })

  }

  handleSearchInput(e) {
    this.setState({
      searchTerms: e.target.value,
    })
    console.log(this.state.searchTerms);
  }
  searchOneBeer() {
    AjaxAdapter.oneBeerSearch(this.state.webID)
    .then((data) => {
      console.log(data)
      this.setState({
        oneBeer: data.data,
        showBeers: false,
      })
    })
  }


  handleClickBeer(id) {
    this.setState({
      webID: id,
      showOne: true
    }, this.searchOneBeer)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Search
          handleSearchSubmit={() => this.handleSearchSubmit()}
          handleSearchInput={(event) => this.handleSearchInput(event)}
        />
        {this.showBeers(this.state.showBeers)}
        {this.showOne(this.state.showOne)}


      </div>
    );
  }
}

export default App;
