module.exports = function(application) {
	application.get('/adicionartesoureiro', function(req, res) 
	{
		application.app.controllers.adicionartesoureiro.tela(application, req, res);
	});

	application.post('/tesoureiro/salvar', function(req, res) 
	{
		application.app.controllers.adicionartesoureiro.salvar_Tesoureiro(application, req, res);
	});
}