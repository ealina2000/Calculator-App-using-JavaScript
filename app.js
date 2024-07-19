
// Accessing the elements from html:-
let buttons = document.querySelectorAll("button")
let inp = document.querySelector("#input")
let str = '';
// Create an array from buttons by array.from methord.
let arr = Array.from(buttons);

arr.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // target "=" button
    if (e.target.innerHTML === "=") {
      str = eval(str);
      inp.value = str;
    } else if (e.target.innerHTML === "DEL") {
      str = str.substring(0, str.length - 1)// If "DEL" button is clicked remeve the last character from input
      inp.value = str;
    } else if (e.target.innerHTML === "AC") {
      str = "";//if "AC" button is clicked clear the input
      inp.value = str;
    }else {
      str += e.target.innerHTML;
      inp.value = str;
    }

  })
})










