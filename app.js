'use strict';

//user data
var placesLived = ['irving', 'dallas', 'denton', 'olympia', 'hoquiam', 'aberdeen', 'seattle'];

var correctAnswers = []; 

for (var j = 0; j < 6; j++) { // 6 attempts given for each correct answer
  var placesResponse = prompt('What cities have I lived in?').toLocaleLowerCase();
  console.log(j);
  console.log(placesResponse);
  console.log(typeof(placesResponse));
  console.log(correctAnswers);
  console.log(j);
  
  for (var i=0; i< placesLived.length; i++) { //cycle through all positions in array for match to response
      if ((placesResponse === placesLived[i]) && (correctAnswers !== placesLived)){
        alert('Correct');
        console.log(i);
        correctAnswers.push(placesLived[i]); // store correct answers in new string
        alert('You have gotten ' + correctAnswers + ' right!');
        console.log(correctAnswers);
        placesLived[i]=null; // remove correct answer from user data to avoid duplicate correct answers
        console.log(placesLived);
        j = 0 ; 
  }
      else { 
      
      continue; // continue searching through placesLived for response
}

  }

}
