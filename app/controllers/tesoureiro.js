module.exports.tesoureiro = function(application, req, res) {	
	if (req.session.loggedin) {
		const vtesoureiro = req.session.cpf;
		const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
		const tesoureiroModel = new application.app.models.TesoureiroDAO(connection);

			res.render("tesoureiro");	
	} else {
		res.redirect('/logintesoureiro');
	}
}

module.exports.logout_Presidente = function(application, req, res){
	req.session.destroy(err =>{ 
		if (err) {
			return res.redirect('/tesoureiro');
		}

		res.redirect('/');
		})
}