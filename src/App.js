import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import PokemonList from "./components/pokemon/list";
import PokemonDetail from "./components/pokemon/detail";

const AppWrapper = styled.section`
    background: #f5f3f3;
`;

function App() {

    return (
        <AppWrapper>
            <Routes>
                <Route index path="pokemon" element={<PokemonList />} />
                <Route path="/pokemon/:name" element={<PokemonDetail />} />
                <Route path="*" element={<Navigate to="pokemon" />} />
            </Routes>
        </AppWrapper>
    );
}

export default App;