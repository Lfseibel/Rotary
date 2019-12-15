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
	const cpf = req.body.cpf;
	const senha = req.body.senha;
	const bcrypt = require('bcrypt');
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const tesoureirosModel = new application.app.models.TesoureiroDAO(connection);

	req.assert('cpf','Cpf deve conter 11 números').notEmpty();
	req.assert('senha','Senha é obrigatorio').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send('preencher');
		return;
	}

	tesoureirosModel.verificarCadastroLogin(cpf, function (error, result) {
		if (result.length > 0) {
			tesoureirosModel.loginTesoureiro(cpf, function(error, result){
				const hash = result[0].senha_tesoureiro.toString();
				bcrypt.compare(senha, hash, function(error, response){
					if (response == true) {
						req.session.loggedin = true;
						req.session.cpf = cpf;
						res.send('entrada');
					} else {
						res.send('erro');
					}					
				});				
			});
				} else {
					res.send('cadastro');
		}		
	});
}

module.exports.login_Presidente = function(application, req, res){
	const cpf = req.body.cpf;
	const senha = req.body.senha;
	const bcrypt = require('bcrypt');
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const presidentesModel = new application.app.models.PresidenteDAO(connection);

	req.assert('cpf','Cpf deve conter 11 números').notEmpty();
	req.assert('senha','Senha é obrigatorio').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send('preencher');
		return;
	}

	presidentesModel.verificarCadastroLogin(cpf, function (error, result) {
		if (result.length > 0) {
			presidentesModel.loginPresidente(cpf, function(error, result){
				const hash = result[0].senha_presidente.toString();
				bcrypt.compare(senha, hash, function(error, response){
					if (response == true) {
						req.session.loggedin1 = true;
						req.session.cpf = cpf;
						res.send('entrada');
					} else {
						res.send('erro');
					}					
				});				
			});
				} else {
					res.send('cadastro');
		}		
	});
}

module.exports.login_Rotariano = function(application, req, res){
	const cpf = req.body.cpf;
	const senha = req.body.senha;
	const bcrypt = require('bcrypt');
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const rotarianosModel = new application.app.models.RotarianoDAO(connection);

	req.assert('cpf','Cpf deve conter 11 números').notEmpty();
	req.assert('senha','Senha é obrigatorio').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send('preencher');
		return;
	}

	rotarianosModel.verificarCadastroLogin(cpf, function (error, result) {
		if (result.length > 0) {
			rotarianosModel.loginRotariano(cpf, function(error, result){
				const hash = result[0].senha_rotariano.toString();
				bcrypt.compare(senha, hash, function(error, response){
					if (response == true) {
						req.session.loggedin2 = true;
						req.session.cpf = cpf;
						res.send('entrada');
					} else {
						res.send('erro');
					}					
				});				
			});
				} else {
					res.send('cadastro');
		}		
	});

}

module.exports.logout = function(application, req, res){
	req.session.destroy(err =>{ 
		if (err) {
			return res.redirect('/');
		}
	
		res.redirect('/');
		})
}


