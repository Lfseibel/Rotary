module.exports = function(application) {
	application.get('/financas', function(req, res) 
	{
		application.app.controllers.financas.financas(application, req, res);
	});
}