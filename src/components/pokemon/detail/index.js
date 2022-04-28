import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import FavouriteToggler from "../../utils/favouriteToggler";

import { getPokemon } from "../../../utils/pokemonAPI";

const PokemonCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background: #FFF;
    border: 1px solid grey;
    padding: 30px 0px;
    max-width: 300px;

    margin-right: auto;
    margin-left: auto;

    font-family: Arial;
    font-weight: 600;
    text-transform: capitalize
`;

const PokeName = styled.div`
    text-align: center;
    margin-top: 25px;
    color: slategrey;
`;

const PokeStat = styled.div`
    color: slategrey;
    font-weight: 400;
    padding: 10px 0 0 25px;
`;

const ReturnButton = styled.a`
    position: absolute;
    top: 0px;
    right: 10px;
    color: slategrey;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
`;

function PokemonDetail() {
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();
    const { name } = useParams();

    async function getData(){
        let data = await getPokemon(name);
        setPokemon(data);
    }

    useEffect(() => {
        if (typeof name === 'string' && name !== '') {
            getData();
        }
    }, []);


    const getTypes = () => {
        let types_arr = [];
        pokemon.types.map(type => {types_arr.push(type.type.name)})
        
        return types_arr.join(', ');
    }

    const img_url = "https://img.pokemondb.net/sprites/black-white/anim/normal/" + name + ".gif";

    return (
        <div>
            {!pokemon ?
                <div>Loading pokemons</div>
                :
                <div>
                    <PokemonCard>
                        <FavouriteToggler pokemon={pokemon.name}/>
                        <ReturnButton onClick={() => navigate("/pokemon")}>
                            &times;
                        </ReturnButton>

                        <img align="center" style={{ display: 'block', margin: 'auto' }} src={img_url} />

                        <PokeName>{pokemon.name}</PokeName>

                        <PokeStat><strong>ID: </strong>{pokemon.id}</PokeStat>
                        <PokeStat><strong>Type: </strong>{getTypes()}</PokeStat>
                        <PokeStat><strong>Height: </strong>{pokemon.height}</PokeStat>
                        <PokeStat>
                            <strong>Abilities: </strong>
                            <ul style={{marginBottom: 0}}>
                                {pokemon.abilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}
                            </ul>
                        </PokeStat>
                    </PokemonCard>
                </div>
            }

        </div>
    );

}

export default PokemonDetail;