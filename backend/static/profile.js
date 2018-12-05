//javascript file for login webpage

$(document).ready(function() {
  

  
});

//firebase storage references
var storage = firebase.storage();
var storageRef = storage.ref();

//firebase database reference
var database = firebase.database();

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

//show create post ui
function showCreatePostUI() {
  $('#createPost').get(0).className = "d-none";
  $('#postContent').get(0).className = "d-block";
  
};


//function to display post picture preview
function uploadProfPic() {
  var preview = $('#postPicPreview');
  var image = $("input[type='file']").get(0).files[0];
  var reader = new FileReader();
  
  reader.onload = function() {
    preview.get(0).src = reader.result;
    preview.parent().get(0).className = "d-block";
    
    
  };
  
  reader.readAsDataURL(image);
};

//function to share recipe and picture
function shareRecipe() {
  var preview = $('#postPicPreview');
  var image = $("input[type='file']").get(0).files[0];
  var reader = new FileReader();
  var postTitle = $('#postTitle').val();
  var postText = $('#postText').val();
  
  if (postTitle == '') {
    $('#uploadError').get(0).textContent = 'Please enter a title.';
    $('#uploadBodyError').get(0).className = 'd-block';
  } else if (image == null) {
    $('#uploadError').get(0).textContent = 'Please upload a photo.';
    $('#uploadBodyError').get(0).className = 'd-block';
  } else if (postText == '') {
    $('#uploadError').get(0).textContent = 'Please enter a description.';
    $('#uploadBodyError').get(0).className = 'd-block';
  } else {
    
    $('#uploadBodyError').get(0).className = 'd-none';
    
    var storageRefProf = storageRef.child('posts/' + new Date().getTime() + image.name);

    reader.onload = function() {


    };

    reader.readAsDataURL(image);

    //put image into firebase storage
    storageRefProf.put(image).then(function(snapshot) {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //link download url with user in firebase
        var user = firebase.auth().currentUser;

//        console.log(user.uid);
//        console.log(downloadURL);
//        console.log(postTitle);
//        console.log(postText);
//        console.log(photoUrl);
        
        firebase.database().ref('feed/' + feedLength).set({
          date: new Date().getTime(),
          description: postText,
          name: user.displayName,
          photo: downloadURL,
          profilePhoto: photoUrl,
          title: postTitle,
          uid: user.uid
        });
        
        firebase.database().ref('users/' + user.uid).set({
          items: feedLength,
        });

      });
    });
    
  }
  
  
};


