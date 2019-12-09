module.exports.tela = function(application, req, res) {
	res.render("addpresidente");
}

module.exports.salvar_Presidente = function(application, req, res){
    const usuario = req.body;
    console.log(usuario);
	const nome = usuario.nome_presidente; 
	const cpf = usuario.cpf_presidente;
	const rg = usuario.rg_presidente;
	const email = usuario.email_presidente;
	const senha = usuario.senha_presidente;
	/* importar o modulo do bcrypt*/
	const bcrypt = require('bcrypt');
	const saltRounds = 10;

	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const presidenteModel = new application.app.models.PresidenteDAO(connection);
	bcrypt.hash(senha, saltRounds, function(err, hash){
	presidenteModel.salvarPresidente(nome, cpf, rg, email, hash, function(error, result){
			res.redirect('/');
		});	
	});		
}		