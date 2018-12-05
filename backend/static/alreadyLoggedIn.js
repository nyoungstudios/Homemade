//javascript file for already logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location = '/';  
  }
});