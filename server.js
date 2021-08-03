/* eslint-disable no-console */
const express = require("express");

const app = express();
const port = 3000;
const path = require('path');

console.log("restaring");

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./views'));

// instruct expess to look into the static folder
  app.use(express.static(path.join(__dirname,'./static')))

  app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname,'./static/index.html'));
    res.render('pages/index',{pageTitle:'Welcome'});
  });

  app.get("/speakers", (req, res) => {
    res.sendFile(path.join(__dirname,'./static/speakers.html'));
  });

  app.listen(port, () => {
    console.log(`express serice is listening on ${port}`);
  });
