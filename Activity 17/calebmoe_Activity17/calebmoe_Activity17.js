/*Author: Name of the student
ISU Netid : netid@iastate.edu
Date :  Month day, YEAR*/
var express = require("express");
var cors = require("cors");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";

const person = {
    name : 'alex',
    email : 'alex@mail.com',
    job : 'software dev'
    };

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
    });

app.get("/", (req, res) => {
    res.status(200);
     res.send("<h1 style='color:Green;background-color: black;border: 0px; '>Hello World From Node </h1>");
     } );

app.get("/name", () => {
    res.send("My name is Abraham");
    } );

app.get("/listRobots", (req, res) => {
    fs.readFile(__dirname + "/" + "robots.json", "utf8", (err, data) => {
        console.log(data);
        res.status(200);
        res.send(data);
    });
 } );

app.get("/person", (req, res) => {
    const person = {
    name : 'alex',
    email : 'alex@mail.com',
    job : 'software dev'
    };
    console.log(person);
    res.status(200);
    res.send(person);
});

function getRobots(){
    fetch('http://localhost:8081/listRobots').then((response) => {
        return response.json()
    }).then( (data) =>{
        console.log(data)
        
        //container.innerHTML = JSON.stringify(data,undefined,2)
        displayRobots(data);

    })
}
function displayRobots(myRobots){
    var container = document.getElementById("showRobots")
    for(var i =0; i<myRobots.length;i++){
        name = myRobots[i].name;
        price = myRobots[i].price;
        description = myRobots[i].description;
        imageUrl = myRobots[i].imageUrl;
        div = document.createElement("div");
        div.innerHTML = `${name} ${price} ${description} <img src=${imageUrl}>`
        container.appendChild(div)
    }
}