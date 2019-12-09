module.exports = function(application) {
	application.get('/addevento', function(req, res) 
	{
		application.app.controllers.addevento.tela(application, req, res);
	});

	application.post('/evento/adicionar', function(req, res) 
	{
		application.app.controllers.addevento.adicionarevento(application, req, res);
	});
}