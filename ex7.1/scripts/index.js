// Part 1
let enteredName;

document.getElementById("enterName").addEventListener("click", () => {
    enteredName = prompt("Enter your name: ");
});

document.getElementById("displayName").addEventListener("click", () => {
    if (enteredName) {
        alert(enteredName);
    } else {
        alert("You have not entered a name yet");
    }
});

// Part 2
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
noButton.style.position = "absolute";

noButton.addEventListener("mouseover", () => {

    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

yesButton.addEventListener("click", () => {
    alert("Congratulations!");
});