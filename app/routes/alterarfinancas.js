module.exports = function(application) {
	application.get('/alterarfinancas', function(req, res) 
	{
		application.app.controllers.alterarfinancas.tela(application, req, res);
	});

	application.post('/financas/subtrair', function(req, res) 
	{
		application.app.controllers.alterarfinancas.subtrair(application, req, res);
	});

	application.post('/financas/adicionar', function(req, res) 
	{
		application.app.controllers.alterarfinancas.adicionar(application, req, res);
	});
}