module.exports.home = function(application, req, res) {	
	if (!req.session.loggedin) 
	{
		if (!req.session.loggedin1) 
		{
			if (!req.session.loggedin2)
			{
				res.render("login");
			}
			else
			{
				res.redirect('/membro')
			}
		} 
		else 
		{
			res.redirect('/presidente');
		}
	} 
	else 
	{
		res.redirect('/tesoureiro');
	}
}

module.exports.hometesoureiro = function(application, req, res) {	
	if (!req.session.loggedin) 
	{
		if (!req.session.loggedin1) 
		{
			if (!req.session.loggedin2)
			{
				res.render("logintesoureiro");
			}
			else
			{
				res.redirect('/membro')
			}
		} 
		else 
		{
			res.redirect('/presidente');
		}
	} 
	else 
	{
		res.redirect('/tesoureiro');
	}
}

module.exports.homepresidente = function(application, req, res) {	
	if (!req.session.loggedin) 
	{
		if (!req.session.loggedin1) 
		{
			if (!req.session.loggedin2)
			{
				res.render("loginpresidente");
			}
			else
			{
				res.redirect('/membro')
			}
		} 
		else 
		{
			res.redirect('/presidente');
		}
	} 
	else 
	{
		res.redirect('/tesoureiro');
	}
}

module.exports.login_Tesoureiro = function(application, req, res){
	const cpf = req.body.cpf_tesoureiro;
	const senha = req.body.senha_tesoureiro;
	const bcrypt = require('bcrypt');
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const tesoureiroModel = new application.app.models.TesoureiroDAO(connection);
	tesoureiroModel.loginTesoureiro(cpf, function(error, result){
		const hash = result[0].senha_tesoureiro.toString();
		bcrypt.compare(senha, hash, function(error, response){
			if (response == true) {
				req.session.loggedin = true;
				req.session.cpf = cpf;
				res.redirect('/tesoureiro');
			} else {
				res.render('logintesoureiro', { erro: 'Senha ou cpf incorretos'});
			}	
				
		});
				
	});
}

module.exports.login_Presidente = function(application, req, res){
	const cpf = req.body.cpf_presidente;
	const senha = req.body.senha_presidente;
	const bcrypt = require('bcrypt');
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const presidenteModel = new application.app.models.PresidenteDAO(connection);
	presidenteModel.loginPresidente(cpf, function(error, result){
		const hash = result[0].senha_presidente.toString();
		bcrypt.compare(senha, hash, function(error, response){
			if (response == true) {
				req.session.loggedin1 = true;
				req.session.cpf = cpf;
				res.redirect('/presidente');
			} else {
				res.render('loginpresidente', { erro: 'Senha ou cpf incorretos'});
			}	
				
		});
				
	});
}

module.exports.login_Rotariano = function(application, req, res){
	const cpf = req.body.cpf_completo;
	const senha = req.body.senha;
	const bcrypt = require('bcrypt');
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const rotarianoModel = new application.app.models.RotarianoDAO(connection);
	rotarianoModel.loginRotariano(cpf, function(error, result){
		const hash = result[0].senha_rotariano.toString();
		bcrypt.compare(senha, hash, function(error, response){
			if (response == true) {
				req.session.loggedin2 = true;
				req.session.cpf = cpf;
				res.redirect('/membro');
			} else {
				res.render('login', { erro: 'Senha ou cpf incorretos'});
			}	
				
		});
				
	});
}

