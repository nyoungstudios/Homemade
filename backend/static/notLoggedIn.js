//javascript file for already logged in

var name;
var photoUrl;
var flag = 0;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementsByTagName('body')[0].className = 'd-block';
    name = user.displayName;
    photoUrl = user.photoURL;
    if (window.location.href.includes('/profile')) {
      $('#myName').get(0).textContent = name;
      $('#myProfImg').get(0).src = photoUrl; 
    }
    flag = 1;
  } else {
    if (flag) {
      window.location = '/logout';
    } else {
      window.location = '/signup';
    }
  }
}); 
