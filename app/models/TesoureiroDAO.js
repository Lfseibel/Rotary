function TesoureiroDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

TesoureiroDAO.prototype.salvarTesoureiro = function(nome, cpf, rg, email, hash, callback){
	this._connection.query('insert into tesoureiro set nome_tesoureiro = ?,cpf_tesoureiro = ?,rg_tesoureiro = ?,email_tesoureiro = ?,senha_tesoureiro = ?', [nome, cpf, rg, email, hash], callback);//jason na funcao query e inseri quando acha o ?
}

TesoureiroDAO.prototype.loginTesoureiro = function(cpf, callback){
	this._connection.query('select senha_tesoureiro from tesoureiro where cpf_tesoureiro = ? ', cpf, callback);
}

TesoureiroDAO.prototype.verificarCadastroLogin = function(cpf, callback){
	this._connection.query('select * from tesoureiro where cpf_tesoureiro = ? ', [cpf], callback);
}

TesoureiroDAO.prototype.alterarFinanca = function(estado, quantidade, callback){
	this._connection.query('insert into financas set estado_financa = ?,valor_financa = ?', [quantidade, estado] , callback);
}

TesoureiroDAO.prototype.getFinancas = function(estado, quantidade, callback){
	this._connection.query('select * from financas', callback);
}

module.exports = function(){
	return TesoureiroDAO;
}