import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete, onToyLike}) {

  const toyCards = toys.map(toy => <ToyCard toy={toy} key={toy.id} onToyDelete={onToyDelete} onToyLike={onToyLike} />)

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
