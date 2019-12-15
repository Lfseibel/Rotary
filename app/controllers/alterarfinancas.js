module.exports.tela = function(application, req, res) {
	if (req.session.loggedin) {
		res.render("alterarfinancas");
	} 
	else 
	{
		res.redirect('/');
	}
}

module.exports.adicionar = function(application, req, res){

	req.assert('quantidade','Nome do servidor é obrigatorio').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send("preencher");
		return;
	}
	const quantidade = req.body.quantidade;
	const estado = "Adicionado";
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const tesoureiroModel = new application.app.models.TesoureiroDAO(connection);
	tesoureiroModel.alterarFinanca(quantidade, estado, function(error, result)
	{
		console.log(error);
		res.send("sucesso");
	});
}

module.exports.subtrair = function(application, req, res){

	req.assert('quantidade','Nome do servidor é obrigatorio').notEmpty();
	const erros = req.validationErrors();
	if (erros) {
		res.send("preencher");
		return;
	}
	const quantidade = req.body.quantidade;
	const estado = "Subtraido";
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const tesoureiroModel = new application.app.models.TesoureiroDAO(connection);
	tesoureiroModel.alterarFinanca(quantidade, estado, function(error, result)
	{
		
	});
		
}