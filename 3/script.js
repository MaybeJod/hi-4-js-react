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

function centerForm() {
	const bodyElement = document.querySelector("body");
	bodyElement.style.margin = "0 auto";
	bodyElement.style.width = "90dvw";
}

//IIFE to start render/painting
const inti = (() => {
	centerForm();
})();
