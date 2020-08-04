import React from "react";
import PokeList from "./PokeList";
import data from "../data/pokemons.json";
import "../stylesheet/App.scss";

const App = () => {
  return (
    <div>
      <h1 className="title">Mi lista Pokemon</h1>
      <PokeList list={data} onClick="markFavourite()" />
    </div>
  );
};

export default App;
