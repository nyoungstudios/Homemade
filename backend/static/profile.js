//javascript file for login webpage

$(document).ready(function() {
  

  
});

var storage = firebase.storage();
var storageRef = storage.ref();


function uploadProfPic() {
  var preview = $('#myProfImg'); 
  var image = $("input[type='file']").get(0).files[0];
  var reader = new FileReader();  
  var storageRefProf = storageRef.child('profilePictures/' + image.name);
  
  reader.onload = function() {
    preview.get(0).src = reader.result;
    
    
  };
  
  reader.readAsDataURL(image);
  
  storageRefProf.put(image).then(function(snapshot) {
    snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log(downloadURL);
    });
  });
  
};