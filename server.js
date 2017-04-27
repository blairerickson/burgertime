var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var orm = require("./config/orm.js");
var connection = require("./config/connection.js");


var app = express();
var PORT = process.env.PORT || 3000;

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
  connection.query("SELECT * FROM burgers WHERE devoured = 0;", function(err, data) {
    if (err) {
      throw err;
    }
    connection.query("SELECT * FROM burgers WHERE devoured = '1';", function(err, eat) {
    if (err) {
      throw err;
    }
    console.log("devoured list here " + eat);
    res.render("index", { eaten: eat , burgers: data});
  });
  });

});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.put("/:id", function(req, res) {
  connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});


app.listen(port);
