var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: []});
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  // autolad :quizId

// GET a la pagina del autor.
router.get('/author', function(req, res) {
  res.render('author', {errors: []});
});

// GET a la pagina de la lista de preguntas.
router.get('/quizes', quizController.index);

// GET a la pagina de la pregunta.
router.get('/quizes/:quizId(\\d+)', quizController.show);

// GET a la pagina de la respuesta.
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

// GET a la pagina del formulario de introducion de nuevas preguntas.
router.get('/quizes/new', quizController.new);

// POST que introduce la nueva pregunta en la BD y redirecciona a la lista de preguntas.
router.post('/quizes/create', quizController.create);

module.exports = router;
