//javascript file for login webpage

$(document).ready(function() {
  
  //variables selected with jQuery for text fields
  var email1Field = $('#email1');
  var password1Field = $('#password1');
  
  //variables selected with jQuery for error messages
  var email1Error = $('#email1Error');
  var password1Error = $('#password1Error');
  
  //varaibles selected with jQuery for email suggestions
  var email1Suggestion = $('#email1Suggestion');
  
  
  //if the submit button is clicked
  $("button[type='submit']").click(function(event) {
    
    if (email1Field.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(password1Error);
      showErrorMessage(email1Error, "Please enter your email.");
    } else if (password1Field.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email1Error);
      showErrorMessage(password1Error, "Please enter your password.");
    } else {
      //signin for firebase
      event.preventDefault();
      firebase.auth().signInWithEmailAndPassword(email1Field.val(), password1Field.val()).catch(function(error) {
        // Handle Errors here.
        var errorCode = '';
        var errorMessage = '';
        
        if (error != null) {
          errorCode = error.code;
          errorMessage = error.message;
        }

        
        if (errorCode == 'auth/user-not-found') {
          hideErrorMessage(email1Suggestion);
          hideErrorMessage(password1Error);
          showErrorMessage(email1Error, "User not found.");
        } else if (errorCode == 'auth/wrong-password') {
          hideErrorMessage(email1Suggestion);
          hideErrorMessage(email1Error);
          showErrorMessage(password1Error, "Password is invalid.");
        } else if (errorCode == 'auth/invalid-email') {
          hideErrorMessage(email1Suggestion);
          hideErrorMessage(password1Error);
          showErrorMessage(email1Error, "Email is invalid.");
        } else if (errorCode == '') {
          console.log('success');
//          window.location = '/';
        }
        
        
      });
    }
    
    
  });
  
  
  //if the email field changes
  email1Field.change(function() {
    email1Field.mailcheck({
      suggested: function(element, suggestion) {
        $('#email1LinkSuggestion').get(0).textContent = suggestion.full;
        $('#email1LinkSuggestion').get(0).href = 'javascript:changeEmailValue("#email1","' + suggestion.full + '");';
        hideErrorMessage(email1Error);
        hideErrorMessage(password1Error);
        showErrorMessage(email1Suggestion);
      },
      empty: function(element) {
        hideErrorMessage(email1Suggestion);
      }
      
    });
    
  });
  
  
                         
});

//function to hide the error message
function hideErrorMessage(fieldError) {
  fieldError.parent().get(0).className = "d-none";
};

//function to show the error message
function showErrorMessage(fieldError, newText) {
  if (newText != null) {
    fieldError.get(0).textContent = newText;
  }
  fieldError.parent().get(0).className = "d-block";
};

//change the text color to red
function changeColorRed(fieldError) {
  fieldError.get(0).className = "form-text text-danger";
};

//change the text color to muted gray
function changeColorMuted(fieldError) {
  fieldError.get(0).className = "form-text text-muted";
};

//change the email value
function changeEmailValue(idName, email) {
  $(idName).val(email);
};


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(displayName);
    console.log(email);
    
  } else {
    // User is signed out.
    // ...
  }
});

