//javascript file for login webpage
//javascript file for home webpage

$(document).ready(function() {
  var dateNow = new Date().getTime();
  
  var DateDiff = {
    
    inMinutes: function(d1, d2) {
      var t2 = d2;
      var t1 = d1;
      return parseInt((t2-t1)/(60*1000))
    },
    
    inHours: function(d1, d2) {
      var t2 = d2;
      var t1 = d1;
      return parseInt((t2-t1)/(3600*1000))
    },

    inDays: function(d1, d2) {
      var t2 = d2;
      var t1 = d1;

      return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
      var t2 = d2;
      var t1 = d1;

      return parseInt((t2-t1)/(24*3600*1000*7));
    }

//    inMonths: function(d1, d2) {
//      var d1Y = d1.getFullYear();
//      var d2Y = d2.getFullYear();
//      var d1M = d1.getMonth();
//      var d2M = d2.getMonth();
//
//      return (d2M+12*d2Y)-(d1M+12*d1Y);
//    },
//
//    inYears: function(d1, d2) {
//      return d2.getFullYear()-d1.getFullYear();
//    }
  }

  
  for (var i = items - 1; i >=0; i--) {
    $('#mainPhoto' + i).get(0).src = userFeedData[i]['photo'];
    $('#profPic' + i).get(0).src = userFeedData[i]['profilePhoto'];
    $('#postText' + i).get(0).textContent = userFeedData[i]['description'].substr(0, 500);
    if (userFeedData[i]['description'].length >= 500) {
      $('#postText' + i).get(0).textContent = $('#postText' + i).get(0).textContent + '...';
    }
    $('#postTitle' + i).get(0).textContent = userFeedData[i]['title'];
    $('#name' + i).get(0).textContent = userFeedData[i]['name'];
    
    
    var dateOld = new Date(userFeedData[i]['date']);
    var timeUnit = ' mins ago';
    
    var timeDifference = DateDiff.inMinutes(dateOld, dateNow);
    if (timeDifference > 60) {
      timeDifference = DateDiff.inHours(dateOld, dateNow);
      timeUnit = ' hrs ago';
      if (timeDifference > 24) {
        timeDifference = DateDiff.inDays(dateOld, dateNow);
        timeUnit = ' days ago';
        if (timeDifference > 7) {
          timeDifference = DateDiff.inWeeks(dateOld, dateNow);
          timeUnit = ' weeks ago';
        }
      }
    }
    
    $('#time' + i).get(0).textContent = timeDifference + timeUnit;
    
    $('#readMore' + i).get(0).pathname = 'post-' + itemData[i];
    
    
  }
  
});

//firebase storage references
var storage = firebase.storage();
var storageRef = storage.ref();

//firebase database reference
var database = firebase.database();

//function to upload profile picture
function uploadProfPic() {
  var preview = $('#myProfImg'); 
  var image = $('#newProfPic').get(0).files[0];
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
function displayPostPic() {
  var preview = $('#postPicPreview');
  var image = $('#newPostPic').get(0).files[0];
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
  var image = $('#newPostPic').get(0).files[0];
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
        
        var profilePhotoUrl = 'http://fakeimg.pl/500x500/';
        if (photoUrl) {
          profilePhotoUrl = photoUrl;
        }
        
        //saves post data to firebase
        //saves to the feed dataset
        firebase.database().ref('feed/' + feedLength).set({
          date: new Date().getTime(),
          description: postText,
          name: user.displayName,
          photo: downloadURL,
          profilePhoto: profilePhotoUrl,
          title: postTitle,
          uid: user.uid
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
            // Data saved successfully!
            //creates the json body for the set request
            jsonBody = {}

            for (var i = 0; i < items; i++) {
              jsonBody[i] = itemData[i];
            }
            jsonBody[items] = feedLength;
            
            //saves to the user dataset
            firebase.database().ref('users/' + user.uid).set(jsonBody, function(error) {
              if (error) {
                // The write failed...
              } else {
                // Data saved successfully!
                window.location.pathname = window.location.pathname;         
              }
            });
          }
        });
        


      });
    });
    
  }
  
  
};


