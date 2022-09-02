import React, { useState } from 'react';
import './App.css';
import SelectPlanet from './Components/SelectPlanet'
import DoCalculations from './Components/DoCalculations';
import AddPlanet from './Components/AddPlanet';
import DeletePlanet from './Components/DeletePlanet';
import logo from './Components/illustration.png';

function App() {

  const [planets, setPlanets] = useState(undefined);
  const handlePlanets = async () => {
    const response = await fetch('https://localhost:7295/Planets');
    const result = await response.json();
    setPlanets(result);
  }

  const [planetId, setPlanetId] = useState(0);
  const handlePlanetId = planetId => {
    setPlanetId(planetId);
  }

  const findPlanet = planetId => planets.find(planet => planet.id === planetId)

  return (
    <div className="App">

      <h1>
        Horizon Calculator
      </h1>

      <section>
        <img
          src={logo}
          height="400"
          width="495" />
      </section>

      <SelectPlanet
        handlePlanetId={handlePlanetId}
        planetId={planetId}
        handlePlanets={handlePlanets}
        planets={planets}
        findPlanet={findPlanet} />
      <ul>
        <li>
          <DoCalculations
            planetId={planetId}
            planets={planets}
            findPlanet={findPlanet} />
        </li>

        <li>
          <AddPlanet planets={planets} />
        </li>

        <li>
          <DeletePlanet
            planetId={planetId}
            planets={planets}
            findPlanet={findPlanet} />
        </li>
      </ul>
    </div>
  );
}

export default App;
