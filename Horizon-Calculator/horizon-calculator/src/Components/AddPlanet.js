import React, { useState } from "react";

const AddPlanet = props => {

  const [planetName, setPlanetName] = useState('');
  const [planetRadius, setPlanetRadius] = useState(0);

  const planetAlreadyExists = planetName => {
		var checkPlanet = props.planets.find(planet => planet.name === planetName);
		return checkPlanet !== undefined;
	}

  const handleAddPlanet = async (name, radius) => {

    if(name === '') {
      setPlanetName('Please Enter A Name!')
      return;
    }

    if (radius <= 0) {
      setPlanetRadius(1)
      return;
    }

    if (planetAlreadyExists(name)) {
      setPlanetName('Planet Already Exists!')
      return;
    }

    await fetch('https://localhost:7295/Planets', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, radius: radius })
    });
    setPlanetName('');
    setPlanetRadius(0);
    window.location.reload(true);
  }

  return (
    <form>
      <header> Wanna Add a Planet? </header>
      <label>Enter Planet Name</label>
      <br></br>
      <input type="text" onChange={e => setPlanetName(e.target.value)} value={planetName}></input>
      <br></br>
      <label>Enter Planet Radius (km)</label>
      <br></br>
      <input type="number" onChange={e => setPlanetRadius(e.target.value)} value={planetRadius}></input>
      <br></br>
      <button id="1" type="button" onClick={() => handleAddPlanet(planetName, parseFloat(planetRadius))}>Add</button>
    </form>
  )
}

export default AddPlanet;   
