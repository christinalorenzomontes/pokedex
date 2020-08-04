import React from "react";
import "../stylesheet/pokemon.scss";

const Pokemon = (props) => {
  const typesLi = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} className={type}>
        {type}
      </li>
    );
  });

  return (
    <>
      <h2 className="card-title">{props.pokemon.name}</h2>
      <img src={props.pokemon.url} alt="Pokemon" className="card-img" />
      <ul className="card-description ">{typesLi}</ul>
    </>
  );
};

export default Pokemon;
