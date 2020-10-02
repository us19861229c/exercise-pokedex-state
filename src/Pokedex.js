import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();

        this.handleNextPokemon = this.handleNextPokemon.bind(this);

        this.state = {
            pokemonDisplayed: 0,
        }
    }

    handleNextPokemon(pokemonList) { 
        this.setState((state) => ({
            pokemonDisplayed: (
                (pokemonList.length === this.state.pokemonDisplayed + 1) 
                    ? 0 : state.pokemonDisplayed + 1
                ),
        }))        
    }

    render() {
        const { pokemons } = this.props;
        const { pokemonDisplayed } = this.state;
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[pokemonDisplayed].id} pokemon={pokemons[pokemonDisplayed]} />
                <button onClick={() => this.handleNextPokemon(pokemons)}>Próximo</button>
            </div>
        );
    }
}

export default Pokedex;