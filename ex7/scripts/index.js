let number1 = ''
do {
  number1 = prompt("Please enter a number.");
  number1 = parseInt(number1, 10)
} while (isNaN(number1))

let number2 = ''
do {
  number2 = prompt("Please enter an other number.");
  number2 = parseInt(number2, 10)
} while (isNaN(number2))

if (number1 === number2) {
  alert('The numbers you entered are the same')
} else if (number1 > number2) {
  alert(`The first number (${number1}) is greater than your second number you entered (${number2})`)
} else {
  alert(`The second number (${number2}) is greater than the first number you entered (${number1})`)
}

let confirmAction = confirm("Do you want to restart the page ?");
if (confirmAction) {
  location.reload();
} else {
  window.close();
}