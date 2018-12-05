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

  $('#mainPhoto' + number).get(0).src = postData['photo'];
  $('#profPic' + number).get(0).src = postData['profilePhoto'];
  $('#postText' + number).get(0).textContent = postData['description'];
  $('#postTitle' + number).get(0).textContent = postData['title'];
  $('#name' + number).get(0).textContent = postData['name'];


  var dateOld = new Date(postData['date']);
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

  $('#time' + number).get(0).textContent = timeDifference + timeUnit;



  
});