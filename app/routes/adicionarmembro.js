module.exports = function(application) {
	application.get('/adicionarmembro', function(req, res) 
	{
		application.app.controllers.adicionarmembro.tela(application, req, res);
	});

	application.post('/membros/salvar', function(req, res) 
	{
		application.app.controllers.adicionarmembro.salvar_Membro(application, req, res);
	});
}