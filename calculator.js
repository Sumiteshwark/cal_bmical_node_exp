const express=require("express");
const bodyParser = require("body-parser");

const app=express();


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){
    res.render("index", {title: "CALHOME"});
});



app.get("/calculator", function(req, res){  
    res.render("calci", {title: "CALCI"});
    });

app.post("/calculator", function(req, res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result = num1+num2;
    res.send("The result of calculation is " + result);
});




app.get("/bmicalculator", function(req, res){
    // res.sendFile(__dirname + "/bmiCalculator.html");
    res.render("bmicalci", {title: "BMICALCI"});
    });

app.post("/bmicalculator", function(req, res){
    var weight=parseFloat(req.body.w);
    var height=parseFloat(req.body.h);
    var bmi = weight/(height*height);
    res.send("Your bmi is " + bmi);
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});

