import React, { useState } from "react";
import ShowResults from './ShowResults';

const DoCalculations = props => {

	const [calculations, setCalculations] = useState({});
	const [observerHeight, setObserverHeight] = useState(0);
	const [planet, setPlanet] = useState({});

	if (props.planetId === 0) {
		return;
	}

	var planetId = props.planetId;
  var findPlanet = props.findPlanet;
	var selectedPlanet = findPlanet(planetId);

	const handleCalculations = async (radius, observerHeight) => {

		if(radius <= 0 || observerHeight <= 0) {
			setObserverHeight(1);
			return;
		}

		setPlanet(selectedPlanet);

		const response = await fetch('https://localhost:7295/Calculator', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ radius:radius, observerHeight:observerHeight })
		});
		const result = await response.json();
		setCalculations(result)
	}

	return (
		<section className="calculations">
			<form>
				<p>Enter Height Above Ground (Meters) On {selectedPlanet.name} (radius: {selectedPlanet.radius}km)</p>
				<br></br>
				<input type="number" onChange={e => setObserverHeight(e.target.value)} value={observerHeight}></input>
				<br></br>
				<button type="button" onClick={() => handleCalculations(parseFloat(findPlanet(planetId).radius), parseFloat(observerHeight) / 1000)}>Calculate</button>
			</form>
			<ShowResults calculations={calculations} planet={planet} />
		</section>
	)
}

export default DoCalculations;
