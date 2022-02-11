// new import statements
// const express = require("express");
import express from "express";
// bodyParser allows the ability to take in post request bodies
import bodyParser from 'body-parser'
// inital express applcation and whole application lies in the  app variable now
const app = express();

const PORT = 8000;
// initialize bodyParser middleware
// this is saying will be using json data in the application
app.use(bodyParser.json())

// get is the GET request and first paramter is "/" home page is the path requested to 
// 2nd paramter is the callback function that accepts 2 paramters request and response

app.get("/", (req, res) =>{
  console.log("Testing server get")
  res.send("Server connected Homepage")
})

// make app listen for request using app.listen
// specify PORT then callback function which will be exectued once the server is run
app.listen(PORT, () => {
  console.log(`🟢 We live on port: http://localhost:${PORT}, stay fresh🍃 `);
});

