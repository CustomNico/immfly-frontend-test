import React, { useState, useEffect } from 'react';
import styled from "styled-components";

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(response => response.json())
            .then(data => setPokemons(data.results));
    }, []);

    const Wrapper = styled.section`
        display: flex;
        flex-wrap: wrap;
        gap: 20px 2vw;
        
        margin-left: 40px;
        margin-right: 40px;

        width: calc(100% - 80px);
        max-width: 900px;

        @media screen and (min-width: 420px) {
            margin-left: 75px;
            margin-right: 75px;

            width: calc(100% - 150px);
        }
        @media screen and (min-width: 900px) {
            margin-left: 120px;
            margin-right: 120px;

            width: calc(100% - 240px);
        }
        @media screen and (min-width: 1200px) {
            margin-left: auto;
            margin-right: auto;

            width: 100%;
        }
    `;

    const PokemonCard = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        background: #FFF;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 30px 0px;

        width: 100%;
        height: 120px;
        
        @media screen and (min-width: 420px) {
            width: calc(50% - 2vw);
        }
        @media screen and (min-width: 900px) {
            width: calc(33.333% - 2vw);
        }

        font-family: Helvetica;
        font-weight: 600;
        text-transform: capitalize
    `;
  
    return (
      <div>
            {pokemons === [] ?
                <div>Loading pokemons</div>
                :
                <Wrapper>
                    {pokemons.map(poke =>
                        <PokemonCard>
                            <img align="center" src={"https://img.pokemondb.net/sprites/black-white/anim/normal/" + poke.name + ".gif"}/>
                            <div style={{marginTop: 25}}>{poke.name}</div>
                        </PokemonCard>
                    )}
                </Wrapper>
            }
      </div>
    );
}

export default PokemonList;