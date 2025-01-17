import React, { useState } from "react";

const MyStateComponent = () => {
	// TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
	const [formData, setFormData] = useState({ name: "", age: "" });
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log(`Form submitted with input:`, formData);
	};

	const renderData = () => {
		return (
			<p>
				your name is: {formData.name} and you are {formData.age} years old
			</p>
		);
	};
	return (
		<div>
			<h2>My State Component</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="name"
					/>
				</label>

				<label>
					Age
					<input
						type="number"
						name="age"
						value={formData.age}
						onChange={handleInputChange}
						placeholder="age"
					/>
				</label>

				<button type="submit">Submit</button>
			</form>
			{isSubmitted ? renderData() : null}
		</div>
	);
};

export default MyStateComponent;
