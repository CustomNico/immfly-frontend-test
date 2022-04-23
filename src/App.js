import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PokemonList from "./components/pokemon/list";
import PokemonDetail from "./components/pokemon/detail";

function App() {
  return (
      <Routes>
        <Route index path="pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="*" element={<Navigate to="pokemon" />} />
      </Routes>
  );
}

export default App;