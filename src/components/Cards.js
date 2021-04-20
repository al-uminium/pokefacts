import React, { Component } from 'react';
import Searchbox from './Searchbox';
import 'tachyons';

class Card extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: '',
      pokeName: '',
      pokeImage: '',
      pokeForm: '',
    }
  }

  componentDidMount() {
    Promise.all([
      fetch("https://pokeapi.co/api/v2/pokemon/grovyle"),
      fetch("https://pokeapi.co/api/v2/pokemon/grovyle").then(response => response.json()).then(data => fetch(data.species.url))])
      .then(([pokeName, pokeForm]) => {
        return Promise.all([pokeName.json(), pokeForm.json()])
      })
      .then(([pokeName, pokeForm]) => {
        this.setState({
          pokeName: pokeName.forms[0].name,
          pokeImage: pokeName.sprites.front_default,
          pokeForm: pokeForm.flavor_text_entries[1].flavor_text
        })
      })
    }
  
  searchPokemon = () => {
    Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchfield}`),
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchfield}`).then(response => response.json()).then(data => fetch(data.species.url))])
      .then(([pokeName, pokeForm]) => {
        return Promise.all([pokeName.json(), pokeForm.json()])
      })
      .then(([pokeName, pokeForm]) => {
        this.setState({
          pokeName: pokeName.forms[0].name,
          pokeImage: pokeName.sprites.front_default,
          pokeForm: pokeForm.flavor_text_entries[1].flavor_text
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSearchChange = (searchValue) => {
    this.setState({ searchfield: searchValue.target.value });
    this.searchPokemon();
  }

  render() {
    return (
      <div className="flex justify-center w-100 h-100 test">
        <div className="bg-light-green br3 pa3 ma2 bw2 tc shadow-5 flex flex-column w-20 h-60">
          <h1 className="pokeName">{this.state.pokeName}</h1>
          <img src={this.state.pokeImage} width="200" height="200" alt="pokemong" className="center"/> 
          {this.state.pokeForm}
          <div className="pa3 ma2">
            <Searchbox searchChange={this.onSearchChange} />
          </div>
        </div>
      </div>
    )
  }
}

export default Card
