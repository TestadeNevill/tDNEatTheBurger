var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8000;
var app = express();
var routes = require("./controllers/burgersController")
// var burger = require("./models/burger");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
//TODO: Define your routes

app.listen(PORT, function () {
  console.log("Listening on http://localhost:" + PORT);

});
