import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png
const Home = () => {
	const [starWarsPeople, setStarWarsPeople] = useState([]);
	const [starWarsPlanets, setStarWarsPlanets] = useState([]);
	const [starWarsVehicles, setStarWarsVehicles] = useState([]);

	const peopleFetch = async () => {
		var getArray1 = [];
		let toArray1 = [
			{ "to": 1 }, { "to": 2 }, { "to": 3 }, { "to": 4 }, { "to": 5 }, { "to": 6 }, { "to": 7 }, { "to": 8 }, { "to": 9 }, { "to": 10 },
			{ "to": 11 }, { "to": 12 }, { "to": 13 }, { "to": 14 }, { "to": 15 }, { "to": 16 }, { "to": 18 }, { "to": 19 }, { "to": 20 }, { "to": 21 },
			{ "to": 22 }, { "to": 23 }, { "to": 24 }, { "to": 25 }, { "to": 26 }, { "to": 27 }, { "to": 28 }, { "to": 29 }, { "to": 30 }, { "to": 31 },
			{ "to": 32 }, { "to": 33 }, { "to": 34 }, { "to": 35 }, { "to": 36 }, { "to": 37 }, { "to": 38 }, { "to": 39 }, { "to": 40 }, { "to": 41 },
			{ "to": 42 }, { "to": 43 }, { "to": 44 }, { "to": 45 }, { "to": 46 }, { "to": 47 }, { "to": 48 }, { "to": 49 }, { "to": 50 }, { "to": 51 },
			{ "to": 52 }, { "to": 53 }, { "to": 54 }, { "to": 55 }, { "to": 56 }, { "to": 57 }, { "to": 58 }, { "to": 59 }, { "to": 60 }, { "to": 61 },
			{ "to": 62 }, { "to": 63 }, { "to": 64 }, { "to": 65 }, { "to": 66 }, { "to": 67 }, { "to": 68 }, { "to": 69 }, { "to": 70 }, { "to": 71 },
			{ "to": 72 }, { "to": 73 }, { "to": 74 }, { "to": 75 }, { "to": 76 }, { "to": 77 }, { "to": 78 }, { "to": 79 }, { "to": 80 }, { "to": 81 },
			{ "to": 82 }, { "to": 83 }
		];

		for (let i = 0; i < toArray1.length; i++) {
			const responsePeople = await fetch(`https://www.swapi.tech/api/people/${toArray1[i].to}`);
			const jsonPeople = await responsePeople.json();

			let newObj = {
				"height": jsonPeople.result.properties.height,
				"mass": jsonPeople.result.properties.mass,
				"hair_color": jsonPeople.result.properties.hair_color,
				"skin_color": jsonPeople.result.properties.skin_color,
				"eye_color": jsonPeople.result.properties.eye_color,
				"birth_year": jsonPeople.result.properties.birth_year,
				"gender": jsonPeople.result.properties.gender,
				"name": jsonPeople.result.properties.name,
				"homeworld": jsonPeople.result.properties.homeworld,
				"description": jsonPeople.result.description,
				"link": `/people/${toArray1[i].to}`
			};
			console.log(newObj)
			getArray1.push(newObj);
		}
		setStarWarsPeople(getArray1);
	}

	const planetsFetch = async () => {
		var getArray2 = [];
		let toArray2 = [
			{ "to": 1 }, { "to": 2 }, { "to": 3 }, { "to": 4 }, { "to": 5 }, { "to": 6 }, { "to": 7 }, { "to": 8 }, { "to": 9 }, { "to": 10 },
			{ "to": 11 }, { "to": 12 }, { "to": 13 }, { "to": 14 }, { "to": 15 }, { "to": 16 }, { "to": 17 }, { "to": 18 }, { "to": 19 }, { "to": 20 },
			{ "to": 21 }, { "to": 22 }, { "to": 23 }, { "to": 24 }, { "to": 25 }, { "to": 26 }, { "to": 27 }, { "to": 28 }, { "to": 29 }, { "to": 30 },
			{ "to": 31 }, { "to": 32 }, { "to": 33 }, { "to": 34 }, { "to": 35 }, { "to": 36 }, { "to": 37 }, { "to": 38 }, { "to": 39 }, { "to": 40 },
			{ "to": 41 }, { "to": 42 }, { "to": 43 }, { "to": 44 }, { "to": 45 }, { "to": 46 }, { "to": 47 }, { "to": 48 }, { "to": 49 }, { "to": 50 },
			{ "to": 51 }, { "to": 52 }, { "to": 53 }, { "to": 54 }, { "to": 55 }, { "to": 56 }, { "to": 57 }, { "to": 58 }, { "to": 59 }, { "to": 60 },
		]
		for (let j = 0; j < toArray2.length; j++) {
			const responsePeople = await fetch(`https://www.swapi.tech/api/planets/${toArray2[j].to}`);
			const jsonPeople = await responsePeople.json();

			let newObj = {
				"diameter": jsonPeople.result.properties.diameter,
				"rotation_period": jsonPeople.result.properties.rotation_period,
				"orbital_period": jsonPeople.result.properties.orbital_period,
				"gravity": jsonPeople.result.properties.gravity,
				"population": jsonPeople.result.properties.population,
				"climate": jsonPeople.result.properties.climate,
				"terrain": jsonPeople.result.properties.terrain,
				"surface_water": jsonPeople.result.properties.surface_water,
				"name": jsonPeople.result.properties.name,
				"description": jsonPeople.description,
				"link": `/planets/${toArray2[j].to}`

			};
			console.log(newObj)
			getArray2.push(newObj);
		}
		setStarWarsPlanets(getArray2);
	}

	const vehiclesFetch = async () => {
		var getArray3 = [];
		let toArray3 = [
			{ "to": 4 }, { "to": 7 }, { "to": 6 }, { "to": 8 }, { "to": 14 }, { "to": 18 }, { "to": 16 }, { "to": 19 }, { "to": 20 }, { "to": 24 },
			{ "to": 25 }, { "to": 30 }, { "to": 26 }, { "to": 33 }, { "to": 34 }, { "to": 35 }, { "to": 36 }, { "to": 37 }, { "to": 38 }, { "to": 42 },
			{ "to": 44 }, { "to": 45 }, { "to": 46 }, { "to": 50 }, { "to": 51 }, { "to": 53 }, { "to": 54 }, { "to": 55 }, { "to": 56 }, { "to": 57 },
			{ "to": 60 }, { "to": 62 }, { "to": 69 }, { "to": 70 }, { "to": 67 }, { "to": 71 }, { "to": 72 }, { "to": 73 }, { "to": 76 }
		]
		for (let k = 0; k < toArray3.length; k++) {
			const responsePeople = await fetch(`https://www.swapi.tech/api/vehicles/${toArray3[k].to}`);
			const jsonPeople = await responsePeople.json();

			let newObj = {
				"model": jsonPeople.result.properties.model,
				"vehicle_class": jsonPeople.result.properties.vehicle_class,
				"manufacturer": jsonPeople.result.properties.manufacturer,
				"cost_in_credits": jsonPeople.result.properties.cost_in_credits,
				"length": jsonPeople.result.properties.length,
				"crew": jsonPeople.result.properties.crew,
				"passengers": jsonPeople.result.properties.passengers,
				"max_atmosphering_speed": jsonPeople.result.properties.max_atmosphering_speed,
				"cargo_capacity": jsonPeople.result.properties.cargo_capacity,
				"consumables": jsonPeople.result.properties.consumables,
				"name": jsonPeople.result.properties.name,
				"description": jsonPeople.description,
				"link": `/vehicles/${toArray3[k].to}`
			};
			console.log(newObj)
			getArray3.push(newObj);
		}
		setStarWarsVehicles(getArray3);
	}

	useEffect(() => {
		//peopleFetch()
		//planetsFetch()
		vehiclesFetch()
	}, [])
	console.log(starWarsPeople)
	console.log(starWarsPlanets)
	console.log(starWarsVehicles)

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);

};

export default Home;
