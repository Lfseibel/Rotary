module.exports = function(application) {
	application.get('/tesoureiro', function(req, res) 
	{
		application.app.controllers.tesoureiro.tesoureiro(application, req, res);
	});

	application.get('/sair', function(req, res) 
	{
		application.app.controllers.login.logout(application, req, res);
	});
}