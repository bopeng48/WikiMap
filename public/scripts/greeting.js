var today = new Date();
var hourNow = today.getHours();
var greeting = {};

if (hourNow > 17) {
  greeting = 'Good Evening'
} else if (hourNow > 12 || hourNow < 16) {
  greeting = 'Good Afternoon';
} else if (hourNow > 0 || hourNow < 12) {
  greeting = 'Good Morning';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + ', ' + '</h3>');