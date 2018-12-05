//javascript file for already logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementsByTagName('body')[0].className = 'd-block';
  } else {
    window.location = '/signup';
  }
}); 