// Dependents
var express = require("express");
var app = express();
var bodyParser = require("body-parser");


// App setup
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// Routes
app.get("/", function(req, res){
    res.render("home");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("*", function(req, res){
    res.render("404");
});


// Listen
app.listen(process.env.PORT || 8000, process.env.IP, function(){
    console.log("server started");
});