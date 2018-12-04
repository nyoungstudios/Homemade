//javascript file for already logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    if ($('#firstName').val() != '') {
      user.updateProfile({
        displayName: $('#firstName').val() + ' ' + $('#lastName').val(),
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
    }
    window.location = '/'; 
  }
});