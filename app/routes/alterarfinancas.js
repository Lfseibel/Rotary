module.exports = function(application) {
	application.get('/alterarfinancas', function(req, res) 
	{
		application.app.controllers.alterarfinancas.tela(application, req, res);
	});

	application.post('/servidor/salvar', function(req, res) 
	{
		application.app.controllers.alterarfinancas.alterar_financas(application, req, res);
	});
}