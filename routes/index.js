var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson5' });
});

/*GET about page*/
router.get('/about', function (req, res, next) {

  //show the about.ejs view
  res.render('about', {
    myName: "Sunghie",
    month: "February",
    title: "About"
  }
  );
});

router.get('/random', function (req, res, next) {
  res.render('random', {
    randomNumber: Math.random(),
    title: "Random"
  });
});

// make this file visible within the rest of the application
module.exports = router;
