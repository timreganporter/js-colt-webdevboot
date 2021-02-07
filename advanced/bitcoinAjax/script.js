let btn = document.querySelector("button");
let priceDisp = document.querySelector("#price");
let currency = "GBP";

// TODO: extract to funciton, run onload, handle errors
btn.addEventListener("click", function() {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      let price = data.bpi[currency].rate;
      priceDisp.innerHTML = price + " " + currency; 
    }
  }

  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET", url);
  XHR.send();
})