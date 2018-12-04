//javascript file for signup webpage

$(document).ready(function() {
  
  //variables selected with jQuery for text fields
  var firstNameField = $('#firstName');
  var lastNameField = $('#lastName');
  var email1Field = $('#email1');
  var email2Field = $('#email2');
  var password1Field = $('#password1');
  var password2Field = $('#password2');
  
  //variables selected with jQuery for error messages
  var firstNameError = $('#firstNameError');
  var lastNameError = $('#lastNameError');
  var email1Error = $('#email1Error');
  var email2Error = $('#email2Error');
  var password1Error = $('#password1Error');
  var password2Error = $('#password2Error');
  
  //varaibles selected with jQuery for email suggestions
  var email1Suggestion = $('#email1Suggestion');
  var email2Suggestion = $('#email2Suggestion');
  
  
  //if the submit button is clicked
  $("button[type='submit']").click(function(event) {
    
    if (firstNameField.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(firstNameError, "Please enter your first name.");
    } else if (lastNameField.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(lastNameError, "Please enter your last name.");
    } else if (email1Field.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(email1Error, "Please enter your email.");
    } else if (email2Field.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(email2Error, "Please re-enter your email.");
    } else if (email1Field.val() != email2Field.val()) {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(email2Error, "Emails don't match.");
    } else if (password1Field.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password2Error);
      showErrorMessage(password1Error, "Please enter your password.");
    } else if (password1Field.val().length < 8) {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password2Error);
      showErrorMessage(password1Error, "Password must be at least 8 characters.");
    } else if (password2Field.val() == '') {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      showErrorMessage(password2Error, "Please re-enter your password.");
    } else if (password1Field.val() != password2Field.val()) {
      event.preventDefault();
      hideErrorMessage(email1Suggestion);
      hideErrorMessage(email2Suggestion);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      showErrorMessage(password2Error, "Passwords don't match.");
    } else {
      event.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(email1Field.val(), password1Field.val()).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode == 'auth/email-already-in-use') {
          hideErrorMessage(email1Suggestion);
          hideErrorMessage(email2Suggestion);
          hideErrorMessage(firstNameError);
          hideErrorMessage(lastNameError);
          hideErrorMessage(email2Error);
          hideErrorMessage(password1Error);
          hideErrorMessage(password2Error);
          showErrorMessage(email1Error, "Email is already taken.");
        } else if (errorCode == 'auth/invalid-email') {
          hideErrorMessage(email1Suggestion);
          hideErrorMessage(email2Suggestion);
          hideErrorMessage(firstNameError);
          hideErrorMessage(lastNameError);
          hideErrorMessage(email2Error);
          hideErrorMessage(password1Error);
          hideErrorMessage(password2Error);
          showErrorMessage(email1Error, "Email is invalid.");
        } else if (errorCode == 'auth/weak-password') {
          hideErrorMessage(email1Suggestion);
          hideErrorMessage(email2Suggestion);
          hideErrorMessage(firstNameError);
          hideErrorMessage(lastNameError);
          hideErrorMessage(email1Error);
          hideErrorMessage(email2Error);
          hideErrorMessage(password2Error);
          showErrorMessage(password1Error, "Weak password");
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
        hideErrorMessage(firstNameError);
        hideErrorMessage(lastNameError);
        hideErrorMessage(email1Error);
        hideErrorMessage(email2Error);
        hideErrorMessage(password1Error);
        hideErrorMessage(password2Error);
        hideErrorMessage(email2Suggestion);
        showErrorMessage(email1Suggestion);
      },
      empty: function(element) {
        hideErrorMessage(email1Suggestion);
      }
      
    });
    
  });
  
  email2Field.change(function() {
    email2Field.mailcheck({
      suggested: function(element, suggestion) {
        $('#email2LinkSuggestion').get(0).textContent = suggestion.full;
        $('#email2LinkSuggestion').get(0).href = 'javascript:changeEmailValue("#email2","' + suggestion.full + '");';
        hideErrorMessage(firstNameError);
        hideErrorMessage(lastNameError);
        hideErrorMessage(email1Error);
        hideErrorMessage(email2Error);
        hideErrorMessage(password1Error);
        hideErrorMessage(password2Error);
        hideErrorMessage(email1Suggestion);
        showErrorMessage(email2Suggestion);
      },
      empty: function(element) {
        hideErrorMessage(email2Suggestion);
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


