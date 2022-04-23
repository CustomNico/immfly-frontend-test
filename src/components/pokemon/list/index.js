import React, { useState, useEffect } from 'react';

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(response => response.json())
            .then(data => setPokemons(data.results));
    }, []);
  
    return (
      <div>
            {pokemons === [] ?
                <div>Loading pokemons</div>
                :
                <div>
                    {pokemons.map(poke =>
                        <div>
                            {poke.name}
                        </div>
                    )}
                </div>
            }
      </div>
    );
}

export default PokemonList;