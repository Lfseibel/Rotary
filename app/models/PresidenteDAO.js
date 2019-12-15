function PresidenteDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

PresidenteDAO.prototype.salvarPresidente = function(nome, cpf, rg, email, hash, callback){
	this._connection.query('insert into presidente set nome_presidente = ?,cpf_presidente = ?,rg_presidente = ?,email_presidente = ?,senha_presidente = ?', [nome, cpf, rg, email, hash], callback);//jason na funcao query e inseri quando acha o ?
}

PresidenteDAO.prototype.salvarEvento = function(nome, data, horario, local, pessoas, callback){
	this._connection.query('insert into evento set nome_evento = ?,data_evento = ?,hora_evento = ?,local_evento = ?,numero_convites = ?', [nome, data, horario, local, pessoas], callback);//jason na funcao query e inseri quando acha o ?
}

PresidenteDAO.prototype.loginPresidente = function(cpf, callback){
	this._connection.query('select senha_presidente from presidente where cpf_presidente = ? ', cpf, callback);
}

PresidenteDAO.prototype.verificarCadastroLogin = function(cpf, callback){
	this._connection.query('select * from presidente where cpf_presidente = ? ', [cpf], callback);
}

PresidenteDAO.prototype.verificarCadastroEvento = function(nome, callback){
	this._connection.query('select * from evento where nome_evento = ? ', [nome], callback);
}

PresidenteDAO.prototype.dadosPresidente = function(vpresidente, callback){
	this._connection.query('select * from presidente where cpf_presidente = ? ', [vpresidente], callback);
}

PresidenteDAO.prototype.buscaIdRotariano = function(rotariano, callback){
	this._connection.query('select * from rotariano where nome_rotariano = ? ', [rotariano], callback);
}

PresidenteDAO.prototype.pegarVendas = function(callback){
	this._connection.query('select * from vendas', callback);
}

PresidenteDAO.prototype.buscaIdEvento = function(nome, callback){
	this._connection.query('select * from evento where nome_evento = ? ', [nome], callback);
}

PresidenteDAO.prototype.adicionarVenda = function(id_evento, id_rotariano, valor, quantidade, realizada, nome, rotariano, callback){
	this._connection.query('insert into vendas set quantidade_ingressos = ?, valor_ingresso = ?, evento_venda = ?, rotariano_venda = ?, vendas_realizadas = ?, evento = ?, rotariano = ?', [quantidade, valor, id_evento, id_rotariano, realizada, nome, rotariano], callback);//jason na funcao query e inseri quando acha o ?
}

module.exports = function(){
	return PresidenteDAO;
}