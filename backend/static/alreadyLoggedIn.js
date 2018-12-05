//javascript file for already logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location = '/';  
  }
});