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
  var LastNameError = $('#LastNameError');
  var email1Error = $('#email1Error');
  var email2Error = $('#email2Error');
  var pasword1Error = $('#pasword1Error');
  var pasword2Error = $('#pasword2Error');
  
  
  $("button[type='submit']").click(function(event) {
    console.log("test");
    
    if (firstNameField.val() == '') {
      event.preventDefault();  
    } else if (lastNameField.val() == '') {
      event.preventDefault();
    } else if (email1Field.val() == '') {
      event.preventDefault();
    } else if (email2Error.val() == '') {
      event.preventDefault();
    } else if (password1Field.val() == '') {
      event.preventDefault();
    } else if (password2Field.val() == '') {
      event.preventDefault();
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

function changeColor(fieldError) {
  fieldError.get(0).className = "form-text text-danger";
};


