const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
	alert("Container clicked!");
});

//- Event Delegation on Button 4 and 5
buttonChildContainer.addEventListener("click", (event) => {
	event.stopPropagation();
	if (event.eventPhase === 3) {
		return alert("child button clicked " + event.target.textContent);
	}
	alert("Child container clicked!");
});

//- DOM Level 0 Event Handlers on Button 2
const button2 = (document.getElementById("button2").onclick = (event) => {
	event.stopPropagation();
	alert("button 2 clicked");
});

//- DOM Level 2 Event Listeners on Button 3
const button3 = document
	.getElementById("button3")
	.addEventListener("click", (event) => {
		event.stopPropagation();
		alert("button 3 clicked");
	});
