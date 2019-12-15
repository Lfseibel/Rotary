module.exports.tela = function(application, req, res) {
	if (req.session.loggedin1) {		
			res.render("addvenda");
	} 
	else 
	{
		res.redirect('/');
	}
}

module.exports.adicionar_venda = function(application, req, res){
	const venda = req.body;
	req.assert('nome','Nome do evento é obrigatorio').notEmpty();
	req.assert('valor','Data é obrigatoria').notEmpty();
	req.assert('quantidade','Horário é obrigatório').notEmpty();
	req.assert('rotariano','Local do evento é obrigatória').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send("preencher")
		return;
	}
	const nome = venda.nome; 
	const valor = venda.valor;
	const quantidade = venda.quantidade;
	const rotariano = venda.rotariano;

	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const presidenteModel = new application.app.models.PresidenteDAO(connection);	

	presidenteModel.buscaIdRotariano(rotariano, function(error, result){
		const id_rotariano = result[0].id_rotariano;
		console.log(id_rotariano);
		presidenteModel.buscaIdEvento(nome, function (error, result) {
			const id_evento = result[0].id_evento;
			const realizada = 0;
			presidenteModel.adicionarVenda(id_evento, id_rotariano, valor, quantidade, realizada, nome, rotariano, function(error, result){
				res.send("sucesso");
			})		
		});
	});
		

	
}