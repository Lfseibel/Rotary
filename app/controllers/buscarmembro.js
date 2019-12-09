module.exports.tela = function(application, req, res) {
	if (req.session.loggedin1) {
			res.render("buscarmembro", {usuario : {} });	
	} 
	else 
	{
		res.redirect('/loginpresidente');
	}
}

module.exports.buscarmembro = function(application, req, res){
	console.log(req.body);
	const bcpf = req.body.cpf_usuario;
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const rotarianoModel = new application.app.models.RotarianoDAO(connection);
	rotarianoModel.buscarMembro(bcpf, function(error, result)
	{
		res.render("buscarmembro", {usuario: result});
	});
}