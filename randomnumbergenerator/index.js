let delay = 3000; // the delay time in milliseconds
let timeLeft = delay / 1000; // calculate the time left in seconds

// display a message every second until the random number is generated
let timer = setInterval(() => {
  console.log(`${timeLeft} seconds left until the random number is generated.`);
  timeLeft--;
}, 1000);

// generate a random number after the delay time and output it
setTimeout(() => {
  clearInterval(timer); // stop the timer
  let randomNumber = Math.floor(Math.random() * 100); // generate a random number between 0 and 99
  console.log(`The random number is ${randomNumber}.`);
}, delay);
