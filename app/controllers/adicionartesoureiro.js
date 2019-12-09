module.exports.tela = function(application, req, res) {
	res.render("addtesoureiro");
}

module.exports.salvar_Tesoureiro = function(application, req, res){
    const usuario = req.body;
    console.log(usuario);
	const nome = usuario.nome_tesoureiro; 
	const cpf = usuario.cpf_tesoureiro;
	const rg = usuario.rg_tesoureiro;
	const email = usuario.email_tesoureiro;
	const senha = usuario.senha_tesoureiro;
	/* importar o modulo do bcrypt*/
	const bcrypt = require('bcrypt');
	const saltRounds = 10;

	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const tesoureiroModel = new application.app.models.TesoureiroDAO(connection);
	bcrypt.hash(senha, saltRounds, function(err, hash){
	tesoureiroModel.salvarTesoureiro(nome, cpf, rg, email, hash, function(error, result){
			res.redirect('/');
		});	
	});		
}		