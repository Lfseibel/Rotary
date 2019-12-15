module.exports.membro = function(application, req, res) {
	if (req.session.loggedin2) {
		const vmembro = req.session.cpf;
		const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
		const rotarianoModel = new application.app.models.RotarianoDAO(connection);
		rotarianoModel.dadosMembro(vmembro, function(error, result)
		{
			res.render("membro", {membro : result});
		});	
	} 
	else 
	{
		res.redirect('/login');
	}
}

module.exports.vendasmembro = function(application, req, res) {
	if (req.session.loggedin2) {
		const vmembro = req.session.cpf;
		const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
		const rotarianoModel = new application.app.models.RotarianoDAO(connection);
		rotarianoModel.dadosMembro(vmembro, function(error, result)
		{
			const id_rotariano = result[0].id_rotariano;
			rotarianoModel.pegarVendas(id_rotariano, function(error, result){
				res.render("vendasmembro", {vendas : result});
			});	
		});	
	} 
	else 
	{
		res.redirect('/login');
	}
}

module.exports.venda = function(application, req, res) {
	if (req.session.loggedin2) {
		var id_venda = req.query;

		const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
		const rotarianoModel = new application.app.models.RotarianoDAO(connection);
		rotarianoModel.getVenda(id_venda, function(error, result)
		{
			console.log(result);
			res.render("venda", {vendas : result});
		});	
	} 
	else 
	{
		res.redirect('/login');
	}
}

module.exports.vender = function(application, req, res) {
	req.assert('quantidade','Nome do evento é obrigatorio').notEmpty();

	const erros = req.validationErrors();
	if (erros) {
		res.send("preencher")
		return;
	}

	const id_venda = req.body.id;
	const quantidade = req.body.quantidade;
	
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const rotarianoModel = new application.app.models.RotarianoDAO(connection);

	rotarianoModel.getVenda(id_venda, function(error, result)
		{
			const inicio = result[0].vendas_realizadas;
			console.log(inicio);
			const mais = (quantidade) + (inicio);
			console.log(mais);
			rotarianoModel.realizarVenda(id_venda, quantidade, function(error, result)
			{
				res.send("sucesso");
			});	
		});		
}

module.exports.logout_Presidente = function(application, req, res){
	req.session.destroy(err =>{ 
		if (err) {
			return res.redirect('/presidente');
		}

		res.redirect('/');
		})
}
