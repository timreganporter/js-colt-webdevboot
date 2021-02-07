let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
let xhrbtn = document.querySelector("#xhr")
let fetchbtn = document.querySelector("#fetch")
let jquerybtn = document.querySelector("#jquery")
let axiosbtn = document.querySelector("#axios")
let display = document.querySelector("#quote");

xhrbtn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let quote = JSON.parse(XHR.responseText)[0];
      display.innerText = quote;
    }
  }
  XHR.open("Get", url);
  XHR.send();
});

fetchbtn.addEventListener("click", function() {
  fetch(url)
  .then(function(req) {
    req.json().then(function(data){
      display.innerText = data[0];
    })
  })
  .catch(function() {
    alert("ERROR!");
  });
});

$('#jquery').click(function() {
  $.getJSON(url)
  .done(function(data){
    $('#quote').text(data[0]);
  })
  .fail(function(data){
    console.log("ERROR!");
  });
});

axiosbtn.addEventListener("click", function() {
  axios.get(url)
  .then(function(res){
    display.innerText = res.data[0];
  })
  .catch(function() {
    console.log("ERROR!");
  });
});