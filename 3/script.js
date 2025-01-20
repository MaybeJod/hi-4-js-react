//colors
const colorPrimary = "#ffffff";
const colorSecondary = "#f95700";
const colorTextPrimary = colorSecondary;
const colorTextSecondary = colorPrimary;

// DOM elements
const bodyElement = document.querySelector("body");
const formElement = document.querySelector("form");

//label elements
const labelElement = document.querySelectorAll("label");
const nameLabelElement = document.querySelector("label[for='name']");
const emailLabelElement = document.querySelector("label[for='email']");
const phoneLabelElement = document.querySelector("label[for='phone']");
const messageLabelElement = document.querySelector("label[for='message']");
//label options element
const optionsLabelElement = document.querySelector("label[for='options']");
//label radio
const radio1LabelElement = document.querySelector("label[for='radio1']");
const radio2LabelElement = document.querySelector("label[for='radio2']");
const radio3LabelElement = document.querySelector("label[for='radio3']");

//input elements
const inputElement = document.querySelectorAll("input");
const nameInputElement = document.getElementById("name");
const emailInputElement = document.getElementById("email");
const phoneInputElement = document.getElementById("phone");
const messageInputElement = document.getElementById("message");
//input select and options element
const SelectElement = document.getElementById("options");
const optionElements = SelectElement.querySelectorAll("option");
//input radio buttons
const inputRadio1Element = document.getElementById("radio1");
const inputRadio2Element = document.getElementById("radio2");
const inputRadio3Element = document.getElementById("radio3");
// submit button
const submitButton = document.querySelector("input[type='submit']");

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

function styleLabel(labelElement) {
	labelElement.forEach((label) => {
		label.style.color = colorTextPrimary;
		label.style.fontSize = "2rem";
		label.style.paddingBottom = "0.5rem";
	});
}

function styleInput(inputElement) {
	inputElement.forEach((input) => {
		input.style.border = `1px solid ${colorSecondary}`;
		input.style.borderRadius = "50px";
		input.style.padding = "1rem";
	});
}

function styleNameLabel(nameLabelElement) {
	nameLabelElement.innerText = "Full name:";
}

function styleNameInput(nameInputElement) {
	nameInputElement.placeholder = "John Doe";
	nameInputElement.style.fontStyle = "italic";
	nameInputElement.style.fontSize = "1rem";
}

function styleEmailLabel(nameEmailElement) {
	nameEmailElement.innerText = "Email:";
}

function styleEmailInput(nameEmailElement) {
	nameEmailElement.placeholder = "johndoe@email.com";
	nameEmailElement.style.fontStyle = "italic";
	nameEmailElement.style.fontSize = "1rem";
}

function stylePhoneLabel(phoneLabelElement) {
	phoneLabelElement.innerText = "Phone number:";
}

function stylePhoneInput(phoneInputElement) {
	phoneInputElement.placeholder = "(123) 456-7890";
	phoneInputElement.style.fontStyle = "italic";
	phoneInputElement.style.fontSize = "1rem";
}

function styleMessageLabel(messageLabelElement) {
	messageLabelElement.innerText = "Your Message:";
}

function styleMessageInput(messageInputElement) {
	messageInputElement.style.fontSize = "1rem";
	messageInputElement.style.fontStyle = "italic";
	messageInputElement.style.resize = "vertical";
	messageInputElement.style.padding = "1rem";
	messageInputElement.style.borderRadius = "10px";
	messageInputElement.style.border = `1px solid ${colorSecondary}`;
	messageInputElement.placeholder = "Your message here...";
}

function styleOptionsLabel(optionsLabelElement) {
	optionsLabelElement.innerText = "Choose an option:";
	optionsLabelElement.style.marginBottom = "0.5rem";
}

function styleSelect(selectElement) {
	selectElement.style.color = colorSecondary;
	selectElement.style.padding = "1rem";
	selectElement.style.fontSize = "1rem";
	selectElement.style.border = `1px solid ${colorSecondary}`;
	selectElement.style.borderRadius = "5px";
}

function styleOptionElements(optionElements) {
	optionElements.forEach((option) => {
		option.style.padding = "0.5rem";
		option.style.fontSize = "1rem";
		option.style.color = colorPrimary;
	});
}

function styleRadioLabels(radioLabels) {
	radioLabels.forEach((label) => {
		label.style.color = colorTextPrimary;
		label.style.fontSize = "1rem";
		label.style.marginLeft = "0.5rem";
	});
}

function styleRadioInputs(radioInputs) {
	radioInputs.forEach((radio) => {
		radio.style.margin = "0.5rem 0";
	});
}

function styleSubmitButton(buttonElement) {
	buttonElement.style.padding = "1rem 2rem";
	buttonElement.style.backgroundColor = colorSecondary;
	buttonElement.style.color = colorTextSecondary;
	buttonElement.style.border = "none";
	buttonElement.style.borderRadius = "20px";
	buttonElement.style.cursor = "pointer";
	buttonElement.style.fontSize = "1rem";

	buttonElement.addEventListener("mouseenter", () => {
		buttonElement.style.backgroundColor = colorPrimary;
		buttonElement.style.color = colorSecondary;
		buttonElement.style.border = `1px solid ${colorSecondary}`;
	});

	buttonElement.addEventListener("mouseleave", () => {
		buttonElement.style.backgroundColor = colorSecondary;
		buttonElement.style.color = colorTextSecondary;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	styleBody(bodyElement);
	styleForm(formElement);
	styleLabel(labelElement);
	styleInput(inputElement);

	styleNameLabel(nameLabelElement);
	styleNameInput(nameInputElement);

	styleEmailLabel(emailLabelElement);
	styleEmailInput(emailInputElement);

	stylePhoneLabel(phoneLabelElement);
	stylePhoneInput(phoneInputElement);

	styleMessageLabel(messageLabelElement);
	styleMessageInput(messageInputElement);

	styleOptionsLabel(optionsLabelElement);
	styleSelect(SelectElement);
	styleOptionElements(optionElements);

	styleRadioLabels([
		radio1LabelElement,
		radio2LabelElement,
		radio3LabelElement,
	]);
	styleRadioInputs([
		inputRadio1Element,
		inputRadio2Element,
		inputRadio3Element,
	]);

	styleSubmitButton(submitButton);
});
