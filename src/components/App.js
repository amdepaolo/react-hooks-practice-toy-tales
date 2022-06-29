import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(toys => setToys(toys) )
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function toySubmit(newToy){
    const updatedToys = [...toys, newToy];
    setToys(updatedToys);
  }

  function toyDelete(id){
    const updatedToys = toys.filter(toy => toy.id !== id);
    setToys(updatedToys)
  }

  function updatedLikes(obj){
    const updatedToys = toys.map(toy =>{
      if(toy.id === obj.id) return obj
      else return toy;
    })
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onToySubmit={toySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        onToyDelete={toyDelete}
        onToyLike={updatedLikes}
      />
    </>
  );
}

export default App;
