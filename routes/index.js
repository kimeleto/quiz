var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  // autolad :quizId

router.get('/author', function(req, res) {
  res.render('author');
});

// GET a la pagina de la lista de preguntas.
router.get('/quizes', quizController.index);

// GET a la pagina de la pregunta.
router.get('/quizes/:quizId(\\d+)', quizController.show);

// GET a la pagina de la respuesta.
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
