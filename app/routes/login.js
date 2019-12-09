module.exports = function(application) {
	application.get('/login', function(req, res) 
	{
		application.app.controllers.login.home(application, req, res);
	});
	application.get('/logintesoureiro', function(req, res) 
	{
		application.app.controllers.login.hometesoureiro(application, req, res);
	});
	application.get('/loginpresidente', function(req, res) 
	{
		application.app.controllers.login.homepresidente(application, req, res);
    });
    application.post('/login/rotariano', function(req, res) 
	{
		application.app.controllers.login.login_Rotariano(application, req, res);
	});
	application.post('/login/presidente', function(req, res) 
	{
		application.app.controllers.login.login_Presidente(application, req, res);
	});
	application.post('/login/tesoureiro', function(req, res) 
	{
		application.app.controllers.login.login_Tesoureiro(application, req, res);
	});
}