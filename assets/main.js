

  //<p id="two-box"></p>


  // create event and function
  function syncCheckboxes(e){
    if(e.checked){
      //get DOM elements
document.getElementById('first-checkbox').checked =true;
document.getElementById('second-checkbox').checked = true;

} else {
  document.getElementById('first-checkbox').checked = false;
  alert("Please check box!!");
  document.getElementById('second-checkbox').checked = false;
  alert("Please check box!!");
}
}

// Set the date we're counting down to (5 days from todays date)
var countDownDate = new Date("Sep 12, 2019 00:00:00").getTime();
  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementsByClassName("two-box")[0].innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("two-box").innerHTML = "EXPIRED";
    }
  }, 1000);


  function gotoAPI(e){

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","  https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/", true);
    xhttp.onreadystatechange = function(res){

      // status means that it has succeeded and readystate allows the repsonseText
      if(this.status ==200 && this.readyState == 4)
      var body = JSON.parse(JSON.parse(xhttp.responseText).body);
      document.getElementById('somePTag').innerHTML = body.submitok;
    }
    xhttp.send();

}
