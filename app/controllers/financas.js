module.exports.financas = function(application, req, res) {	
	if (req.session.loggedin) {
		res.render("financas");	
	} else {
		res.redirect('/logintesoureiro');
	}
}