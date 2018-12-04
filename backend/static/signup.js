//javascript file for signup webpage

$(document).ready(function() {
  console.log('hi1');
  
  //variables selected with jQuery for text fields
  
  var firstNameField = $('#firstName');
  var lastNameField = $('lastName');
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
  
  
  $("button[type='submit']").click(function(event) {
    console.log("test");
    
    if (firstNameField.val() == '') {
      event.preventDefault();
      changeColorRed(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(firstNameError, "Please fill out this field.")
    } else if (lastNameField.val() == '') {
      event.preventDefault();
      changeColorRed(lastNameError);
      hideErrorMessage(firstNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(lastNameError, "Please fill out this field.")
    } else if (email1Field.val() == '') {
      event.preventDefault();
      changeColorRed(email1Error);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(email1Error, "Please fill out this field.")
    } else if (email2Error.val() == '') {
      event.preventDefault();
      changeColorRed(email2Error);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(password1Error);
      hideErrorMessage(password2Error);
      showErrorMessage(email2Error, "Please fill out this field.")
    } else if (password1Field.val() == '') {
      event.preventDefault();
      changeColorRed(password1Error);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password2Error);
      showErrorMessage(password1Error, "Please fill out this field.")
    } else if (password2Field.val() == '') {
      event.preventDefault();
      changeColorRed(password2Error);
      hideErrorMessage(firstNameError);
      hideErrorMessage(lastNameError);
      hideErrorMessage(email1Error);
      hideErrorMessage(email2Error);
      hideErrorMessage(password1Error);
      showErrorMessage(password2Error, "Please fill out this field.")
    }
    
    
    
    
    
  });
  
  
  
                         
});

//function to hide the error message
function hideErrorMessage(fieldError) {
  fieldError.parent().get(0).className = "d-none";
};

//function to show the error message
function showErrorMessage(fieldError, newText) {
  fieldError.get(0).textContent = newText;
  fieldError.parent().get(0).className = "d-block";
};

function changeColorRed(fieldError) {
  fieldError.get(0).className = "form-text text-danger";
};

function changeColorMuted(fieldError) {
  fieldError.get(0).className = "form-text text-muted";
};


