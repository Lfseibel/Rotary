module.exports = function(application) {
	application.get('/adicionarpresidente', function(req, res) 
	{
		application.app.controllers.adicionarpresidente.tela(application, req, res);
	});

	application.post('/presidente/salvar', function(req, res) 
	{
		application.app.controllers.adicionarpresidente.salvar_Presidente(application, req, res);
	});
}