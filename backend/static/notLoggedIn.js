//javascript file for already logged in

var name, photoUrl;
var flag = 0;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementsByTagName('body')[0].className = 'd-block';
    name = user.displayName;
    photoUrl = user.photoURL;
    flag = 1;
  } else {
    if (flag) {
      window.location = '/logout';
    } else {
      window.location = '/signup';
    }
  }
}); 
