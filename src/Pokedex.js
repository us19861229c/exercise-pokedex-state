import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.handleNextPokemon = this.handleNextPokemon.bind(this);
    this.handlePokemonType = this.handlePokemonType.bind(this);

    const { pokemons } = this.props;

    this.state = {
      pokemonDisplayed: 0,
      allPokemons: pokemons,
    };
  }

  handleNextPokemon(pokemonList) {
    this.setState((state) => ({
      pokemonDisplayed: (
        (pokemonList.length === this.state.pokemonDisplayed + 1)
          ? 0 : state.pokemonDisplayed + 1
      ),
    }))
  }

  handlePokemonType(target) {
    const { pokemons } = this.props;
    const pokemonType = target.innerText;
    let myPokemons;
    if(pokemonType === 'All'){
      myPokemons = pokemons;
    }else{
      myPokemons = pokemons.filter((pokemon) => pokemon.type === pokemonType);
    }
    const buttonDisabled = document.querySelector('#nextPokemon');
    if (myPokemons.length < 2) {
      buttonDisabled.setAttribute('disbled', true);
      buttonDisabled.classList.add('disabled-button');
    }else{
      buttonDisabled.setAttribute('disbled', false);
      buttonDisabled.classList.remove('disabled-button');
    }
    this.setState({pokemonDisplayed: 0, allPokemons: myPokemons});
  }

  render() {
    const { pokemonDisplayed, allPokemons } = this.state;
    return (
      <div className="pokedex">
        <Pokemon
          key={allPokemons[pokemonDisplayed].id}
          pokemon={allPokemons[pokemonDisplayed]}
        />
        <div className="buttons-pokemon">
         <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            All
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Bug
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Dragon
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Electric
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Fire
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Poison
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Psychic
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Normal
          </button>
          <br />
          <button
            onClick={() => this.handleNextPokemon(allPokemons)}
            id="nextPokemon"
          >
            Próximo
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
