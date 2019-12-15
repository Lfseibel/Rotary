module.exports = function(application) {
	application.get('/addvenda', function(req, res) 
	{
		application.app.controllers.addvenda.tela(application, req, res);
	});

	application.post('/venda/adicionar', function(req, res) 
	{
		application.app.controllers.addvenda.adicionar_venda(application, req, res);
	});
}