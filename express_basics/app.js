const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hi there; welcome to my assignment!");
});

app.get("/love:thing", function(req, res) {
  res.send("I love " + req.params.thing);
});

app.get("/speak/:animal", function(req, res) {
  const animal = req.params.animal;
  const sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
  }
  res.send("The " + animal + " says '" + sounds[animal.toLowerCase()] + "'" );
});

app.get("/repeat/:phrase/:times", function(req, res) {
  response = "";
  for (var i = 0; i < req.params.times; i++) {
    response += req.params.phrase + " ";
  }
  res.send(response);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found. ... What are you doing with your life?")
});

app.listen(3000, process.env.IP, function() {
  console.log("Server has started!");
});