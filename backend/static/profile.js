//javascript file for login webpage

$(document).ready(function() {
  

  
});

//firebase storage references
var storage = firebase.storage();
var storageRef = storage.ref();

//function to upload profile picture
function uploadProfPic() {
  var preview = $('#myProfImg'); 
  var image = $("input[type='file']").get(0).files[0];
  var reader = new FileReader();  
  var storageRefProf = storageRef.child('profilePictures/' + new Date().getTime() + image.name);
  
  reader.onload = function() {
    preview.get(0).src = reader.result;
    
    
  };
  
  reader.readAsDataURL(image);
  
  //put image into firebase storage
  storageRefProf.put(image).then(function(snapshot) {
    snapshot.ref.getDownloadURL().then(function(downloadURL) {
      
      //link download url with user in firebase
      var user = firebase.auth().currentUser;

      user.updateProfile({
        photoURL: downloadURL
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
      
    });
  });
  
};