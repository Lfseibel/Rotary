function TesoureiroDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

TesoureiroDAO.prototype.salvarTesoureiro = function(nome, cpf, rg, email, hash, callback){
	this._connection.query('insert into tesoureiro set nome_tesoureiro = ?,cpf_tesoureiro = ?,rg_tesoureiro = ?,email_tesoureiro = ?,senha_tesoureiro = ?', [nome, cpf, rg, email, hash], callback);//jason na funcao query e inseri quando acha o ?
}

TesoureiroDAO.prototype.loginTesoureiro = function(cpf, callback){
	this._connection.query('select senha_tesoureiro from tesoureiro where cpf_tesoureiro = ? ', cpf, callback);
}

TesoureiroDAO.prototype.verificarCadastro = function(ra, cpf, rg, email, callback){
	this._connection.query('select * from usuario where ra_usuario = ? OR cpf_usuario = ? OR rg_usuario = ? OR email_usuario = ?', [ra,cpf,rg,email], callback);
}

TesoureiroDAO.prototype.coisasAluno = function(vnome, callback){
	this._connection.query('select * from usuario where ra_usuario = ? ', vnome, callback);
}

TesoureiroDAO.prototype.dadosAluno = function(vnome, callback){
	this._connection.query('select * from usuario where ra_usuario = ? ', vnome, callback);
}

module.exports = function(){
	return TesoureiroDAO;
}