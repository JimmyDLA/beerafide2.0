import React, { Component } from 'react';
import Search from './components/Search/Search'
import AjaxAdapter from './AjaxHelper/AjaxAdapter';
import Items from './components/Items/Items';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchTerms: "",
      beerSearch: [],
      oneBeer: [],
      webID:""


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
  }
  handleSearchInput(e) {
    this.setState({
      searchTerms: e.target.value
    })
    console.log(this.state.searchTerms);
  }
  handleClickBeer(id) {
    // this.setState({
      // webID: id
    // })
    console.log("this is the id ===>", id);
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
        <Items
          beerSearch={this.state.beerSearch}
          handleClickBeer={this.handleClickBeer.bind(this)}
        />

      </div>
    );
  }
}

export default App;
