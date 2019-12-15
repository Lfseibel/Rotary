module.exports = function(application) {
	application.get('/presidente', function(req, res) {
		application.app.controllers.presidente.presidente(application, req, res);
	});

	application.get('/vendas', function(req, res) {
		application.app.controllers.presidente.vendas(application, req, res);
	});

	application.get('/sair', function(req, res) 
	{
		application.app.controllers.login.logout(application, req, res);
	});
}