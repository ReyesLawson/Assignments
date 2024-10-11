// Array Assignment

let Color = ['red', 'blue', 'white', 'green','purple', 'yellow'];
    Color.push('black');

console.log( Color);

function clickHandler(event) {
  event.preventDefault();
  console.log(event);
  newElement = document.getElementById("ColorsInput").value;
  console.log(newElement);
  document.getElementById("Colors").innerHTML += `<li>${newElement}</li>`;
}
function buttonHandler(value){
    console.log(value);
    document.getElementById("Colors").innerHTML += `<li>${value}</li>`;
}

