module.exports.presidente = function(application, req, res) {
	if (req.session.loggedin1) {
		const vpresidente = req.session.cpf;
		const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
		const presidenteModel = new application.app.models.PresidenteDAO(connection);
		presidenteModel.dadosPresidente(vpresidente, function(error, result)
		{
			res.render("presidente", {presidente : result});
		});	
	} 
	else 
	{
		res.redirect('/loginpresidente');
	}
}

module.exports.logout_Presidente = function(application, req, res){
	req.session.destroy(err =>{ 
		if (err) {
			return res.redirect('/presidente');
		}

		res.redirect('/');
		})
}
