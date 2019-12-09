module.exports = function(application) {
	application.get('/buscarmembro', function(req, res) 
	{
		application.app.controllers.buscarmembro.tela(application, req, res);
	});

	application.post('/membros/buscar', function(req, res) 
	{
		application.app.controllers.buscarmembro.buscarmembro(application, req, res);
	});
}