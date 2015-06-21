var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res) {
  res.render('author');
});

// GET a la pagina de la pregunta.
router.get('/quizes/question', quizController.question);

// GET a la pagina de la respuesta.
router.get('/quizes/answer', quizController.answer);

module.exports = router;
