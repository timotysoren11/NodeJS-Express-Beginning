/**
 * Using express - FrameWork for Nodejs
 * We do not require to import http module 
 * As express import itself
 * Basic Routing
 */


const express = require("express");

// We will create an APP
const app = express();

// using get() - method for particular routing                          
app.get('/', (req, res) =>{
   return res.send("Hello from Home Page");
})

app.get('/about', (req, res) =>{
  return res.send(`Hello ${req.query.name}`);
})

app.listen(8000, () => console.log("Server Started"));
