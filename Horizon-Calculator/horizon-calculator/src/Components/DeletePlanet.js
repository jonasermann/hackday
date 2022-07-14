import React from "react";
// import ConfirmDeletion from "./ConfirmDeletion";

const DeletePlanet = props => {

  if(props.planetId === 0) {
    return;
  }

  const handleDeletePlanet = async(id) => {
    await fetch(`https://localhost:7295/Planets/${id}`, {
      method: 'DELETE'
    })
    window.location.reload(true);
  }

  var planet = props.planets.find(planet => planet.id === props.planetId);

  return (
    <section>
      <p>Press on the button below if you wish to delete {planet.name}!</p>
      <br></br>
      <button className="deleteButton" type="button" onClick={() => handleDeletePlanet(planet.id)}>Delete {planet.name}</button>
    </section>
  )
}

export default DeletePlanet;   
