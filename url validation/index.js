const regex = /^(http|https):\/\/[\w\W]+?\.[a-zA-Z]+$/;

function isValidURL(input) {
  if (regex.test(input)) {
    console.log(`${input} is a valid URL`);
  } else {
    console.log(`${input} is not a valid URL`);
  }
}

isValidURL('https://www.example.com'); // valid URL
isValidURL('http://www.example.com'); // valid URL
isValidURL('ftp://www.example.com'); // invalid URL
isValidURL('https://www.example.com/path?query=string'); // valid URL
isValidURL('https://www.example'); // invalid URL
isValidURL('https\.,;,://123.45.67.89'); // valid URL
