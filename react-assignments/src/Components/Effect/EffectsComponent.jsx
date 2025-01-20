// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import React, { useState, useEffect } from "react";

function EffectsComponent() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://thronesapi.com/api/v2/Characters"
				);
				if (!response.ok) {
					throw new Error("Network response is tweking man");
				}
				const data = await response.json();
				setCharacters(data);
				console.log(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<pre>
			<h2>Game of Thrones Characters lol</h2>
			<ul>
				{characters.map((character) => (
					<li key={character.id}>{character.fullName}</li>
				))}
			</ul>
		</pre>
	);
}

export default EffectsComponent;
