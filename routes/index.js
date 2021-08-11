/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */

const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = params => {
  router.get('/', (req, res) => {
    // if(!req.session.visitcount){
    //   req.session.visitcount=0;
    // }
    // req.session.visitcount +=1;
    // console.log(`Number of Visits: ${req.session.visitcount}`);
    // res.render('pages/index', { pageTitle: 'Welcome' });
      res.render('layout', { pageTitle: 'Welcome', template: 'index' });
    });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};