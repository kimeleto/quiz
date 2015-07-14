var models = require('../models/models.js');

//Autoload - factoriza el codigo si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
	models.Quiz.find(quizId).then(
		function(quiz) {
			if (quiz) {
				req.quiz = quiz;
				next();
			} else {next(new Error('No existe quizId=' + quizID));}
		}
	).catch(function(error) {next(error);});
};

// GET /quizes
exports.index = function(req, res) {
	var search = "%";

	if(req.query.search){
		search = "%" + req.query.search.replace(" ", "%") + "%";
	}

	models.Quiz.findAll({where: ["pregunta like ?", search]}).then(
		function(quizes){
			var mensaje = "";
			if (quizes.length === 0) {
				mensaje = "</br>No se han encontrado preguntas que cumplan el criterio de busqueda.";
			}
			res.render('quizes/index', {quizes: quizes, mensaje: mensaje});
		}
	).catch(function(error) {next(error);});
};

// GET /quizes/:quizId
exports.show = function(req, res) {
	res.render('quizes/show', {quiz: req.quiz});
};

// GET /quizes/:quizId/answer
exports.answer = function(req, res) {
	var resultado = 'Incorrecto';
	if (req.query.respuesta === req.quiz.respuesta) {
		resultado = "Correcto";
	}
	res.render("quizes/answer", {quiz: req.quiz, respuesta: resultado});
};
