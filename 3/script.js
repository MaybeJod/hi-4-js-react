`<form action="/submit" method="post">
    <label for="name">Label text should be something else:</label>
    <input type="text" id="name" name="name" required /><br /><br />

    <label for="email">Label text should be something else:</label>
    <input type="email" id="email" name="email" required /><br /><br />

    <label for="phone">Label text should be something else:</label>
    <input type="tel" id="phone" name="phone" required /><br /><br />

    <label for="message">Label text should be something else:</label><br />
    <textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        required
    ></textarea
    ><br /><br />

    <label for="options">Text should be something else:</label>
    <select id="options" name="options" required>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option></select
    ><br /><br />

    <label>Choose one:</label><br />
    <input
        type="radio"
        id="radio1"
        name="radioGroup"
        value="radio1"
        required
    />
    <label for="radio1">Radio 1</label><br />
    <input type="radio" id="radio2" name="radioGroup" value="radio2" />
    <label for="radio2">Radio 2</label><br />
    <input type="radio" id="radio3" name="radioGroup" value="radio3" />
    <label for="radio3">Radio 3</label><br /><br />

    <input type="submit" value="Submit" />
</form>`;

//colors
const colorPrimary = "#ffffff";
const colorSecondary = "#f95700";
const colorTextPrimary = colorSecondary;
const colorTextSecondary = colorPrimary;

// DOM elements
const bodyElement = document.querySelector("body");
const formElement = document.querySelector("form");
const labelElement = document.querySelectorAll("label");
const inputElement = document.querySelectorAll("input");

function styleBody(bodyElement) {
	bodyElement.style.padding = "10vw";
	bodyElement.style.display = "flex";
	bodyElement.style.justifyContent = "center";
	bodyElement.style.alignItems = "center";
	return bodyElement;
}

function styleForm(formElement) {
	formElement.style.padding = "2rem";
	formElement.style.backgroundColor = colorPrimary;
	formElement.style.borderRadius = "50px";
	formElement.style.border = `1px solid ${colorSecondary}`;
	formElement.style.display = "flex";
	formElement.style.flexDirection = "column";
	return formElement;
}

function styleInput(inputElement) {
	inputElement.forEach((input) => {
		input.style.border = `1px solid ${colorSecondary}`;
		input.style.borderRadius = "50px";
		input.style.padding = "1rem";
	});
}

styleBody(bodyElement);
styleForm(formElement);
styleInput(inputElement);
