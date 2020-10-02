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
    const myPokemons = pokemons.filter((pokemon) => pokemon.type === pokemonType);
    this.setState({allPokemons: myPokemons});
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
            Fire
          </button>
          <button
            onClick={(event) => this.handlePokemonType(event.target)}
          >
            Psychic
          </button>
          <br />
          <button
            onClick={() => this.handleNextPokemon(allPokemons)}
          >
            Próximo
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
