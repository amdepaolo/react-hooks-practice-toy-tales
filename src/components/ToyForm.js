import React, {useState} from "react";

function ToyForm({onToySubmit}) {
  const [toyName, setToyName] = useState('');
  const [toyImg, setToyImg] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const newToyObj = {name: toyName, image: toyImg, likes: 0};
    fetch('http://localhost:3001/toys',{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToyObj)
    })
    .then(r => r.json())
    .then(r => onToySubmit(r))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={e => setToyName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={e => setToyImg(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
