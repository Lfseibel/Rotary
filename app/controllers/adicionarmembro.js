module.exports.tela = function(application, req, res) {
	if (req.session.loggedin1) {		
			res.render("adicionarmembro");
	} 
	else 
	{
		res.redirect('/');
	}
}

module.exports.salvar_Membro = function(application, req, res){
	const usuario = req.body;
	req.assert('nome_usuario','Nome do usuário é obrigatorio').notEmpty();
	req.assert('ra_usuario','RA deve conter 6 números').len(6,6);
	req.assert('cpf_usuario','CPF deve conter 11 digitos').len(11,11);
	req.assert('rg_usuario','RG deve conter entre 4 á 12 digitos').len(4,12);
	const erros = req.validationErrors();
	if (erros) {
		res.render("adicionarmembro", {validacao : erros, usuario : usuario});
		return;
	}
	const ra = usuario.ra_usuario; 
	const cpf = usuario.cpf_usuario;
	const rg = usuario.rg_usuario;
	const email = usuario.email_usuario;
	const nome = usuario.nome_usuario;
	const senha = usuario.senha_usuario;
	const csenha = usuario.csenha_usuario;
	/* importar o modulo do bcrypt*/
	const bcrypt = require('bcrypt');
	const saltRounds = 10;
	if (senha==csenha) 
	{
		const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
		const alunosModel = new application.app.models.AlunosDAO(connection);
		alunosModel.verificarCadastro(ra, cpf, rg, email, function(error, result){
			if (result.length > 0) {
						res.send('Já existe um usuário com este RA/CPF/RG ou EMAIL cadastrado');
					} else {
						bcrypt.hash(senha, saltRounds, function(err, hash){
							alunosModel.salvarAluno(ra, cpf, rg, email, nome, hash, function(error, result){
								res.redirect('/');
							});	
						});		
				}		
		});
	} 
	else 
	{
		res.send('Senhas não batem');
	}
}