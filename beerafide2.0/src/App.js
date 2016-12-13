import React, { Component } from 'react';
import Search from './components/Search/Search'
import AjaxAdapter from './AjaxHelper/AjaxAdapter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchTerms: "",
      beerSearch: []
    }
  }

  searchBeers() {
    AjaxAdapter.beerSearch(this.state.searchTerms)
    .then((data) => {
      this.setState({
        beerSearch: data.results
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

      </div>
    );
  }
}

export default App;
