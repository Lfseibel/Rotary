module.exports.tela = function(application, req, res) {
	if (req.session.loggedin1) {
			res.render("buscarmembro", {rotariano : {} });	
	} 
	else 
	{
		res.redirect('/loginpresidente');
	}
}

module.exports.buscarmembro = function(application, req, res){
	const bcpf = req.body.cpf;
	console.log(bcpf);
	const connection = application.config.dbConnection();//recupera modulo que conecta com o banco
	const rotarianoModel = new application.app.models.RotarianoDAO(connection);
	rotarianoModel.buscarMembro(bcpf, function(error, result)
	{
		console.log(result);
		res.render("buscarmembro", {rotariano: result});
	});
}