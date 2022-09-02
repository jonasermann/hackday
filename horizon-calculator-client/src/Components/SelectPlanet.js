import React from 'react';

const SelectPlanet = props => {

  if (props.planets === undefined) {
    return (
      <section>
        <label>Press here to load available planets</label> 
        <br></br>
        <button type="button" onClick={props.handlePlanets}>Load Planets</button>
      </section>
    )
  }

  if (props.planets.length === 0) {
    return (
      <section>
        <label>No Planets are available! Consider adding one!</label> 
        <br></br>
        <button type="button" onClick={props.handlePlanets}>Load Planets</button>
      </section>
    )
  }

  return (
    <section>
      <section className="planetChoices">
        {props.planets.map(planet => (
          <button type="button" onClick={() => props.handlePlanetId(planet.id)}>{planet.name}</button>
        ))}
      </section>
      <br></br>   
    </section>
  )
}

export default SelectPlanet;
