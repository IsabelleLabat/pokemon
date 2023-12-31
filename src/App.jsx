// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages

import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import Types from "./pages/Types";
import Pokemon from "./pages/Pokemon";
import Type from "./pages/Type";

// Component

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon/:nomdupokemon" element={<Pokemon />} />
        <Route path="/types" element={<Types />} />
        <Route path="/type/:type" element={<Type />} />
      </Routes>
    </Router>
  );
}

export default App;
