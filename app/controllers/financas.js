module.exports.financas = function(application, req, res) {	
	if (req.session.loggedin) {
		const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
		const tesoureiroModel = new application.app.models.TesoureiroDAO(connection);
		tesoureiroModel.getFinancas(function(error, result)
		{
			res.render("financas", {financas: result});	
		});
		
	} else {
		res.redirect('/logintesoureiro');
	}
}