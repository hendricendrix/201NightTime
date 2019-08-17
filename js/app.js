'use strict';

//user entry function
function userEntry(mango) {
  while (!(mango === 'yes' || mango === 'y' || mango === 'no' || mango === 'n')) {
    mango = prompt('Think harder ' + userName);
  }
}

// entering user name
var userName = prompt('Can you please enter your name?');
console.log ('the user name is ' + userName);

//yes/no questions
var localFoodFan = prompt('Hey ' + userName + ', are you fan of local food?').toLowerCase();
console.log('Are you fan of local food? User answer: ' + localFoodFan);
userEntry(localFoodFan);
if(localFoodFan === 'yes' || localFoodFan === 'y'){
  alert('Wonderful ' + userName + ', there are a lot of choices here in Seattle');
} else if (localFoodFan === 'no' || localFoodFan === 'n') {
  alert('Too bad ' + userName + ', you\'re missing out!');
}

var likesBurgers = prompt('Are there delicious local Burgers?').toLowerCase();
userEntry(likesBurgers);
if(likesBurgers === 'yes'){
  alert('I like cheese burgers with double meat!');
} else {
  alert('Of course there are!');
}

var likesMexfood = prompt('Do you like Mexican food?').toLowerCase();

userEntry(likesMexfood);

if(likesMexfood === 'yes'){
  alert('My favorite dish is enchiladas');
} else {
  alert('What do you mean?!');
}

var likesFriedfood = prompt('Do you like Fried food?').toLowerCase();

userEntry(likesFriedfood);

if(likesFriedfood === 'yes'){
  alert('My favorite fried foods are vegetables!');
} else {
  alert('What do you mean?!');
}
