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
function frenchFry(){
  var localFoodFan = prompt('Hey ' + userName + ', are you fan of local food?').toLowerCase();
  console.log('Are you fan of local food? User answer: ' + localFoodFan);
  userEntry(localFoodFan);
  if(localFoodFan === 'yes' || localFoodFan === 'y' || localFoodFan === 'no' || localFoodFan === 'n'){
    alert('Wonderful ' + userName + ', there are a lot of choices here in Seattle');
  } else if (localFoodFan === 'no' || localFoodFan === 'n') {
    alert('Too bad ' + userName + ', you\'re missing out!');
  }
}

frenchFry();

function cheeseHam(){
  var likesBurgers = prompt('Are you a fan of Burgers?').toLowerCase();
  userEntry(likesBurgers);
  console.log ('does the user like burgers ' + likesBurgers);
  if(likesBurgers === 'yes' || likesBurgers === 'y'|| likesBurgers === 'no' || likesBurgers === 'n'){
    alert('I like cheese burgers with double meat!');
  } else {
    alert('Of course there are!');
  }
}

cheeseHam();

function sourCream(){
  var likesMexfood = prompt('Do you like Mexican food?').toLowerCase();
  userEntry(likesMexfood);
  console.log ('does the user like mexican foos ' + likesMexfood);
  if(likesMexfood === 'yes'|| likesMexfood === 'y'|| likesMexfood === 'no' || likesMexfood === 'n'){
    alert('My favorite dish is enchiladas');
  } else {
    alert('What do you mean?!');
  }
}

sourCream();

function friedVeg(){
  var likesFriedfood = prompt('Do you like Fried food?').toLowerCase();
  userEntry(likesFriedfood);
  console.log ('does the user like fried food ' + likesFriedfood);
  if(likesFriedfood === 'yes'|| likesFriedfood === 'y'|| likesFriedfood === 'no' || likesFriedfood === 'n'){
    alert('My favorite fried foods are vegetables!');
  } else {
    alert('What do you mean?!');
  }
}

friedVeg();
