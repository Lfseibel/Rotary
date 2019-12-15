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
	console.log(usuario);
	req.assert('nome','Nome do usuário é obrigatorio').notEmpty();
	req.assert('cel','Celular é obrigatório').notEmpty();
	req.assert('cel','Celular deve conter 11 digitos DD+Numero').len(11);
	req.assert('cpf','Cpf é obrigatório').notEmpty();
	req.assert('cpf','CPF deve conter 11 digitos').len(11);
	req.assert('email','email é obrigatório').notEmpty();
	req.assert('aniversario','Aniversário é obrigatório').notEmpty();
	req.assert('endereco','Endereço é obrigatório').notEmpty();
	req.assert('emprego','Emprefo é obrigatório').notEmpty();
	req.assert('senha','Senha é obrigatória').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send('preencher');
		return;
	}
	const nome = usuario.nome;
	const cel = usuario.cel;
	const cpf = usuario.cpf;
	const email = usuario.email;
	const aniversario = usuario.aniversario;
	const endereco = usuario.endereco;
	const emprego = usuario.emprego;
	const senha = usuario.senha;
	const nome_esp = usuario.nome_esp;
	const cel_esp = usuario.cel_esp;
	const cpf_esp = usuario.cpf_esp;
	const email_esp = usuario.email_esp;
	const aniversario_esp = usuario.aniversario_esp;
	const endereco_esp = usuario.endereco_esp;
	const emprego_esp = usuario.emprego_esp;
	const nome_fi = usuario.nome_fi;
	const cel_fi = usuario.cel_fi;
	const cpf_fi = usuario.cpf_fi;
	const email_fi = usuario.email_fi;
	const aniversario_fi = usuario.aniversario_fi;
	const endereco_fi = usuario.endereco_fi;
	const emprego_fi = usuario.emprego_fi;
	const nome_fi2 = usuario.nome_fi2;
	const cel_fi2 = usuario.cel_fi2;
	const cpf_fi2 = usuario.cpf_fi2;
	const email_fi2 = usuario.email_fi2;
	const aniversario_fi2 = usuario.aniversario_fi2;
	const endereco_fi2 = usuario.endereco_fi2;
	const emprego_fi2 = usuario.emprego_fi2;
	
	console.log(cpf);
	/* importar o modulo do bcrypt*/
	const bcrypt = require('bcrypt');
	const saltRounds = 10;

	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const rotarianosModel = new application.app.models.RotarianoDAO(connection);
	rotarianosModel.verificarCadastro(cpf, email, function(error, result){
		if (result.length > 0) {
			res.send('cadastrado');
				} else {
					bcrypt.hash(senha, saltRounds, function(err, hash){
						rotarianosModel.salvarRotariano(nome, cpf, cel, email, aniversario, endereco, emprego, hash, nome_esp, cel_esp, cpf_esp, email_esp, aniversario_esp, endereco_esp, emprego_esp, nome_fi, cel_fi, cpf_fi, emprego_fi, email_fi, aniversario_fi, endereco_fi,nome_fi2, cpf_fi2, endereco_fi2, emprego_fi2, email_fi2, aniversario_fi2, cel_fi2, function(error, result){
							console.log(error);
							res.send('sucesso');
						});	
					});		
			}		
	});

}