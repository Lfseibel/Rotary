function RotarianoDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

RotarianoDAO.prototype.salvarAluno = function(ra, cpf, rg, email, nome, hash, callback){
	this._connection.query('insert into usuario set nome_usuario = ?,ra_usuario = ?,cpf_usuario = ?,rg_usuario = ?,email_usuario = ?,senha_usuario = ?', [nome, ra, cpf, rg, email, hash], callback);//jason na funcao query e inseri quando acha o ?
}

RotarianoDAO.prototype.loginAluno = function(ra, callback){
	this._connection.query('select senha_usuario from usuario where ra_usuario = ? ', ra, callback);
}

RotarianoDAO.prototype.verificarCadastro = function(ra, cpf, rg, email, callback){
	this._connection.query('select * from usuario where ra_usuario = ? OR cpf_usuario = ? OR rg_usuario = ? OR email_usuario = ?', [ra,cpf,rg,email], callback);
}

RotarianoDAO.prototype.buscarMembro = function(vcpf, callback){
	this._connection.query('select * from rotariano where cpf_rotariano = ? ', vcpf, callback);
}

RotarianoDAO.prototype.dadosAluno = function(vnome, callback){
	this._connection.query('select * from usuario where ra_usuario = ? ', vnome, callback);
}

module.exports = function(){
	return RotarianoDAO;
}