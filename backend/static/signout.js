//javascript file to signout

function signoutUser() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location = '/logout';
  }).catch(function(error) {
    // An error happened.
  });
};