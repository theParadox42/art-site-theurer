var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/about", function(req, res){
    res.render("about")
});


app.listen(process.env.PORT || 8000, process.env.IP, function(){
    console.log("server started");
});