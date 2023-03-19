let input = "hello world"; // the input string
let reversed = ""; // variable to store the reversed string

setTimeout(() => {
  // reverse the input string after a delay of 2 seconds
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  console.log(reversed); // print the reversed string as output
}, 5000);
