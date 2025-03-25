/*
Dajabre Torain-Williams
WEB 115-N801
M03 - Console/Code Play
*/

/* Console, Alerts, Variables and Prompts */

console.log('Start | M03 - Console/Code Play');
// Output: Start | M03 - Console/Code Play

let fun = prompt("Having fun with JavaScript? Type, 'Yes I am!'.");
//Output: (An alert box with text) Having fun with JavaScript?

window.alert(fun);
// Output: (An alert box with text) Yes I am!

// Variables for Strings
var firstName = 'Dajabre';
var lastName = 'Torain';

console.log('Dajabre'); // Output: Dajabre

alert('My first name is ' + firstName + '.'); // Output: My first name Dajabre.

console.log('Torain'); // Output: Torain

alert('My last name is ' + lastName + '.'); // Output: My last name Torain.

var username = prompt("What is your name? Let's get to know each other.");
// Output: What is your name? Let's get to know each other.
// Input: The user name.

var age = prompt('How old will you turn this year?');
// Output: How old are you?
// Input: The user age

// Add a constant
const thisYear = 2025;

//Find out what year the user was born
if (age !== '') {
  var birthYear = thisYear - age;
  alert(username + ', you were born in ' + birthYear + '.');
  // Output: {User's Name}, you were born in {birthYear}
} else {
  alert('Have you been born?');
  // Output: Have you been born?
}

/* Math methods and concatenation */
alert('What is your lucky number? Click ok to reveal.');
// Output: What is your lucky number? Click ok to reveal.

const x = Math.floor(Math.random() * 100);
alert('Your lucky number is ' + x);
// Output: Your lucky number is {x}

let num1 = 6;
let num2 = 8;
let add = num1 + num2; // 14
let mult = num1 * num2; // 48
let div = num1 / num2; // 0.75

let num3 = 9;
let mod = num3 % num2; // 1

alert('Did you know that ' + num1 + ' + ' + num2 + ' is equal to ' + add + '?');
// Output: Did you know that 6 + 8 is equal to 14?

alert('Did you know that ' + num1 + ' * ' + num2 + ' is equal to ' + mult + '?');
// Output: Did you know that 6 * 8 is equal to 48?

alert('Did you know that ' + num1 + ' / ' + num2 + ' is equal to ' + div + '?');
// Output: Did you know that 6 / 8 is equal to 0.75?

alert('Did you know that the remainder of ' + num3 + ' and ' + num2 + ' is equal to ' + mod + '?');
// Output: Did you know that the remainder of 9 and 8 is equal to 1 ?

const smart = 'You are smart!';
alert(smart.toUpperCase());
// Output: YOU ARE SMART!

let text = prompt('Enter a sentence to count the characters: ');
// Output: Enter a sentence to count the characters:

alert('The number of characters in that sentence is ' + text.length + '.');
// Output: the number of characters from sentence the user input

/* More concatenation */
let weather = 'Today it is going to ';
weather += 'rain.';
alert(weather);
// Output: Today is going to snow.

/* Dates */
var today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

alert('Today is ' + days[day] + ', ' + months[month] + ' ' + date + ', ' + year + '.');
// Output: Today is {day},  {month} {date}, {year}. Ex: Today is Tuesday, March 25, 2025.

/* String to Array */
let sentence = 'JavaScript is fun.';
let letters = sentence.split('');
alert(letters);
// Output: ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t", "i", "s", "f", "u", "n", "."]

sentence = prompt('You try! Enter something: ');
letters = sentence.split('');
alert(letters);

//* Array to String */
let rainbow = prompt('What are the first 3 colors of the rainbow?');
// Output: What are the first 3 colors of the rainbow?

const colors = ['red', 'orange', 'yellow'];
alert('The answer is ' + colors.join(', ') + '.');
// Output: red, orange, yellow

/* Check if a number is an integer */
const value = 7.2;
let intBool = prompt('Is ' + value + ' an integer?');
// Output: Is 7.2 is an integer?

if (Number.isInteger(value)) {
  alert(Number.isInteger(value) + ' , ' + value + ' is an integer.');
  // Output: true, 7.2 is an integer.
} else {
  alert(Number.isInteger(value) + ' , ' + value + ' is not an integer.');
  // Output: false, 7.2 is not an integer.
}
