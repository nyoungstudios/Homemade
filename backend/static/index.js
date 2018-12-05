//javascript file for home webpage

$(document).ready(function() {
  console.log(feedData);
  for (var i = feedLength - 1; i >=0; i--) {
    $('#mainPhoto' + i).get(0).src = feedData[i]['photo'];
    $('#profPic' + i).get(0).src = feedData[i]['profilePhoto'];
    $('#postText' + i).get(0).textContent = feedData[i]['description'];
    $('#postTitle' + i).get(0).textContent = feedData[i]['title'];
    $('#name' + i).get(0).textContent = feedData[i]['name'];
    
    
  }
  
});