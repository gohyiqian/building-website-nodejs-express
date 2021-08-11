/* eslint-disable no-console */
const express = require("express");

const app = express();
const port = 3000;
const path = require('path');
const cookieSession = require('cookie-session');

const routes = require('./routes');


// class
const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakerService('./data/speakers.json');

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['Ghdur687399s7w', 'hhjjdf89s866799'],
  })
);

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./views'));

// instruct expess to look into the static folder
app.use(express.static(path.join(__dirname,'./static')))

app.use('/', routes({
  feedbackService,
  speakersService,
}));

app.get("/speakers", (req, res) => {
  res.sendFile(path.join(__dirname,'./static/speakers.html'));
});

app.listen(port, () => {
  console.log(`express serice is listening on ${port}`);
});
