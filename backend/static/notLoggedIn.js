//javascript file for already logged in

var name, photoUrl;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementsByTagName('body')[0].className = 'd-block';
    name = user.displayName;
    photoUrl = user.photoURL;
  } else {
    window.location = '/signup';
  }
}); 