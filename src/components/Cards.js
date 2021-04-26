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
      pokeID: '',
    }
  }

  componentDidMount() {
    this.handleOnClick();
  }

  randomPokeID = () => {
    return Math.floor(Math.random()*898)+1 //current highest pokeID is 898.
  }

  searchValueCheck = () => {
    if (typeof(this.state.searchfield) === 'number') {
      return this.state.searchfield;
    } else if (typeof(this.state.searchfield) === 'string') {
      return this.state.searchfield.toLowerCase()
    }
  }
  
  
  searchPokemon = () => {
    Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.searchValueCheck()}`),
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.searchValueCheck()}`).then(response => response.json()).then(data => fetch(data.species.url))]) /*fetches pokemon-species url*/
      .then(([pokeName, pokeForm]) => {
        return Promise.all([pokeName.json(), pokeForm.json()])
      })
      .then(([pokeName, pokeForm]) => {
        this.setState({
          pokeName: pokeName.name,
          pokeImage: pokeName.sprites.front_default,
          pokeForm: pokeForm.flavor_text_entries[1].flavor_text,
        })
      })
      .catch((error) => {
        if (error) {
          console.log(error)
        } 
      });
  }

  onSearchChange = (searchValue) => {
    this.setState({ searchfield: searchValue.target.value }, () => {
      this.searchPokemon();
    });
  }

  handleKeyPress = (searchValue) => {
    if (searchValue.key === 'Enter'){
        this.setState({ searchfield: searchValue.target.value }, () => {
          this.searchPokemon();
        });
    }
  }

  handleOnClick = () => {
    const pokeID = this.randomPokeID();
    this.setState({ searchfield: pokeID }, () => {
      this.searchPokemon();
    });
  }

  render() {
    return (
      <div className="flex justify-center w-100 h-100 test">
        <div className="tc justify-center">
          <h1 className="pokeName">{this.state.pokeName}</h1>
          <img src={this.state.pokeImage} width="200" height="200" alt="pokemong" className="center"/> 
          <div className="pa4 f6">{this.state.pokeForm}</div>
          <div className="pa3 ma2">
            <Searchbox searchChange={this.handleKeyPress} />
            <button onClick={this.handleOnClick} className="ma3 pa2 br3 f6">Random Pokemon</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
