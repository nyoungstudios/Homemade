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
      if (photoUrl) {
        $('#myProfImg').get(0).src = photoUrl;
      }
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        $('#profile').get(0).pathname = "/profile/" + idToken;
      }).catch(function(error) {
        // Handle error
      });
    } else if (window.location.pathname == '/') {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        $('#profile').get(0).pathname = "/profile/" + idToken;
      }).catch(function(error) {
        // Handle error
      });
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
