module.exports = function(application) {
	application.get('/membro', function(req, res) {
		application.app.controllers.membro.membro(application, req, res);
	});

	application.get('/vendasmembro', function(req, res) {
		application.app.controllers.membro.vendasmembro(application, req, res);
	});

	application.get('/venda', function(req, res) {
		application.app.controllers.membro.venda(application, req, res);
	});

	application.post('/venda/realizar', function(req, res) {
		application.app.controllers.membro.vender(application, req, res);
	});

	application.get('/sair', function(req, res) 
	{
		application.app.controllers.login.logout(application, req, res);
	});
}