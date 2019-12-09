function PresidenteDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

PresidenteDAO.prototype.salvarPresidente = function(nome, cpf, rg, email, hash, callback){
	this._connection.query('insert into presidente set nome_presidente = ?,cpf_presidente = ?,rg_presidente = ?,email_presidente = ?,senha_presidente = ?', [nome, cpf, rg, email, hash], callback);//jason na funcao query e inseri quando acha o ?
}

PresidenteDAO.prototype.loginPresidente = function(cpf, callback){
	this._connection.query('select senha_presidente from presidente where cpf_presidente = ? ', cpf, callback);
}

PresidenteDAO.prototype.coisasAluno = function(vnome, callback){
	this._connection.query('select * from usuario where ra_usuario = ? ', vnome, callback);
}

PresidenteDAO.prototype.dadosPresidente = function(vpresidente, callback){
	this._connection.query('select * from presidente where cpf_presidente = ? ', vpresidente, callback);
}

module.exports = function(){
	return PresidenteDAO;
}