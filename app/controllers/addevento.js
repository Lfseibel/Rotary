module.exports.tela = function(application, req, res) {
	if (req.session.loggedin1) {		
			res.render("addevento");
	} 
	else 
	{
		res.redirect('/');
	}
}

module.exports.adicionarevento = function(application, req, res){
	const evento = req.body;
	req.assert('nome','Nome do evento é obrigatorio').notEmpty();
	req.assert('data','Data é obrigatoria').notEmpty();
	req.assert('horario','Horário é obrigatório').notEmpty();
	req.assert('local','Local do evento é obrigatória').notEmpty();
	req.assert('pessoas','Média de pessoas é obrigatória').notEmpty();
	req.assert('descricao','Descricao é obrigatória').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send("preencher")
		return;
	}
	const nome = evento.nome; 
	const data = evento.data;
	const horario = evento.horario;
	const local = evento.local;
	const pessoas = evento.pessoas;

	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const presidenteModel = new application.app.models.PresidenteDAO(connection);	

	presidenteModel.verificarCadastroEvento(nome, function (error, result) {
		if (result.length > 0) {
			res.send("cadastrado");
		}
			else 
			{
				presidenteModel.salvarEvento(nome, data, horario, local, pessoas, function(error, result){
					console.log(error);
					res.send("sucesso");
				});	
		}		
	});

	
}