$('#btn').on("click", function() {
  const url = "https://api.thecatapi.com/v1/images/search?api_key=3f41d873-8446-47b3-80c0-45c2f98ff2ff"
  $.getJSON(url)
   .done(function(data) {
    $('#catImg').attr("src", data[0].url);
   })
   .fail(function(){
    alert("REQUEST IS NOT PAWSIBLE");
  })
});