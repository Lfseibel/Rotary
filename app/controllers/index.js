module.exports.home = function(application, req, res) {	
	if (!req.session.loggedin) 
	{
		if (!req.session.loggedin1) 
		{
			if(!req.session.loggedin2)
			{
				res.render("index");
			}
			else
			{
				res.redirect('/membro');
			}
		} 
		else 
		{
			res.redirect('/presidente');
		}
	} 
	else 
	{
		res.redirect('/tesoureiro');
	}
}




	