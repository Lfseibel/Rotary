function RotarianoDAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

RotarianoDAO.prototype.salvarRotariano = function(nome, cpf, cel, email, aniversario, endereco, emprego, hash, nome_esp, cel_esp, cpf_esp, email_esp, aniversario_esp, endereco_esp, emprego_esp, nome_fi, cel_fi, cpf_fi, emprego_fi, email_fi, aniversario_fi, endereco_fi,nome_fi2, cpf_fi2, endereco_fi2, emprego_fi2, email_fi2, aniversario_fi2, cel_fi2, callback){
	this._connection.query('insert into rotariano set nome_rotariano = ?,cpf_rotariano = ?, cel_rotariano = ?,email_rotariano = ?,aniversario_rotariano = ?,endereço_rotariano = ?, emprego_rotariano = ?, senha_rotariano = ?,nome_conjugue = ?,cel_conjugue = ?, email_conjugue = ?,cpf_conjugue = ?,aniversario_conjugue = ?,endereço_conjugue = ?, emprego_conjugue = ?,nome_filho = ?,cel_filho = ?, email_filho = ?,cpf_filho = ?,aniversario_filho = ?,endereço_filho = ?, emprego_filho = ?,nome_filho1 = ?,cel_filho1 = ?, email_filho1 = ?,cpf_filho1 = ?,aniversario_filho1 = ?,endereço_filho1 = ?, emprego_filho1 = ? ', [nome, cpf, cel, email, aniversario, endereco, emprego, hash, nome_esp, cel_esp, email_esp, cpf_esp, aniversario_esp, endereco_esp, emprego_esp, nome_fi, cel_fi, email_fi, cpf_fi, aniversario_fi, endereco_fi, emprego_fi, nome_fi2, cel_fi2, email_fi2, cpf_fi2, aniversario_fi2, endereco_fi2, emprego_fi2], callback);//jason na funcao query e inseri quando acha o ?
}

RotarianoDAO.prototype.loginRotariano = function(cpf, callback){
	this._connection.query('select senha_rotariano from rotariano where cpf_rotariano = ? ', cpf, callback);
}

RotarianoDAO.prototype.verificarCadastroLogin = function(cpf, callback){
	this._connection.query('select * from rotariano where cpf_rotariano = ? ', [cpf], callback);
}

RotarianoDAO.prototype.verificarCadastro = function(cpf, email, callback){
	this._connection.query('select * from rotariano where cpf_rotariano = ? OR email_rotariano = ?', [cpf, email], callback);
}

RotarianoDAO.prototype.buscarMembro = function(bcpf, callback){
	this._connection.query('select * from rotariano where cpf_rotariano = ? ', [bcpf], callback);
}

RotarianoDAO.prototype.dadosMembro = function(vmembro, callback){
	this._connection.query('select * from rotariano where cpf_rotariano = ? ', [vmembro], callback);
}

RotarianoDAO.prototype.getVenda = function(id_venda, callback){
	this._connection.query('select * from vendas where id_venda = ? ', [id_venda], callback);
}

RotarianoDAO.prototype.pegarVendas = function(id_rotariano, callback){
	this._connection.query('select * from vendas where rotariano_venda = ? ', [id_rotariano], callback);
}

RotarianoDAO.prototype.realizarVenda = function(id_venda, quantidade, callback){
	this._connection.query('update vendas set vendas_realizadas = ? where id_venda = ? ', [quantidade,id_venda], callback);
}

module.exports = function(){
	return RotarianoDAO;
}