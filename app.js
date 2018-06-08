'use strict';

// var myString = 'hello world';

// var myNumber = 884848484;

// var myBoolean = true; 

// var myArray = [1, 2, 3, 4];

// alert('sup bitch!!');

// console.log('sup bitch'); 

// confirm('are you available');

var jobResponse = prompt('Do I have a job?').toLowerCase();

console.log(jobResponse); 

if( jobResponse === ('yes' || 'y')){
  alert('That\'s correct! I work in Quality Assurance. The least fun job in the tech industry');
}

else if (jobResponse === 'no' || 'n') {
  alert('How dare you.');
}
else {
  alert('whoops. try again');
}

var spouseResponse = prompt('Am I in a serious relationship?').toLowerCase();

console.log(spouseResponse);

if (spouseResponse === ('yes' || 'y')) {
  alert('That\'s correct! I have 1 boo');
}

else if (spouseResponse === 'no' || 'n') {
  alert('How dare you.');
}
else {
  alert('whoops. try again');
}

var bestFriendResponse = prompt('Are we friends?').toLowerCase();

console.log(bestFriendResponse);

if (bestFriendResponse === ('yes' || 'y')) {
  alert(':) good answer');
}

else if (bestFriendResponse === 'no' || 'n') {
  alert(':( bad answer');
}
else {
  alert('whoops.don\'t type your name now yah hear?');
}

for(var i = 3; i > -1; i--) {
var lintResponse = parseInt(prompt('How many miligrams of lint is in my belly button?'));

console.log(lintResponse);

if (lintResponse === (5)) {
  alert('That\'s correct!');
  i = -1; 
}

else if (lintResponse > 5 ) {
  alert('Too high. You have ' + i + ' attempts remaining');
}
else if (lintResponse < 5 ) {
  alert('Too low. You have ' + i + ' attempts remaining');
}
else {
  alert('whoops. try again');
}

}

// var counter = 5;

// while(counter > 0) { 
//   console.log(counter); 
//   counter--;

// }

var placesLived = ['irving', 'dallas', 'denton', 'olympia', 'hoquiam', 'aberdeen', 'seattle'];
var remaining = placesLived.length;

for ( var chances = 6; chances > -1; chances--){
var placesResponse = prompt('What cities have I lived in?').toLowerCase();
console.log(placesResponse);

if (placesResponse === placesLived[0]) {
alert('Correct');
remaining--;
console.log(remaining);
}
else if(placesResponse === placesLived[1]) {
    alert('Correct');
    remaining--;
    console.log(remaining);
}

else if (placesResponse === placesLived[2]) {
    alert('Correct');
    remaining--;
    console.log(remaining);
}
else if (placesResponse === placesLived[3]) {
    alert('Correct');
    remaining--;
    console.log(remaining);
}
else if (placesResponse === placesLived[4]) {
    alert('Correct');
    remaining--;
    console.log(remaining);
}
else if (placesResponse === placesLived[5]) {
    alert('Correct');
    remaining--;
    console.log(remaining);
}

else if (placesResponse === placesLived[6]) {
  alert('Correct');
  remaining--;
  console.log(remaining);

}
else { 
  alert('You have '+ chances +' chances left');
}
}

var correct = placesLived.length - remaining;

alert('Congradulations, you answered ' +correct+ ' out of '+ placesLived.length + ' correct!');



// for(var i = 0; i < placesLived.length; i++) {
// console.log(i);
// console.log('friends', placesLived[i], 'at position', i);
// }

