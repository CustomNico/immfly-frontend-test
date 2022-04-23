import * as React from "react";

function PokemonDetail() {
    return (
        <div>
            { true ?
              <div>Loading pokemons</div>
            :
              <div>
                  { pokemons.forEach(poke => {<div>{poke.name}</div>}) }
              </div>
            }
  
        </div>
      );

}

export default PokemonDetail;