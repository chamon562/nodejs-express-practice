// new import statements
// const express = require("express");
import express from "express";
// bodyParser allows the ability to take in post request bodies
import bodyParser from 'body-parser'
// inital express applcation and whole application lies in the  app variable now
const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`🟢 We live on port: ${PORT}, stay fresh🍃 `);
});
