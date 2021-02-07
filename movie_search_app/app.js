const express = require("express");
const app = express();
const got = require("got");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("search");
});

app.get("/results", function(req, res) {
  (async () => {
    try {
      const response = await got(`http://omdbapi.com?s=${req.query.search}&apikey=thewdb`);
      const data = JSON.parse(response.body)
      res.render("results", { data: data });
    } catch (error) {
      res.send('error:', error);
    }
  })();
});


app.listen(3000, process.env.IP, function() {
  console.log("Movie App has started!!!");
});