var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var orm = require("./config/orm.js");
var connection = require("./config/connection.js");


var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var mysql = require("mysql");




app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burgers: data });

  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (movie) VALUES (?)", [req.body.movie], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.delete("/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.put("/", function(req, res) {

  connection.query("UPDATE burgers SET movie = ? WHERE id = ?", [
    req.body.movie, req.body.id
  ], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.listen(port);
