//banco
class Banco{
	constructor()
	{
		this.nome = "Rotary Club"
		this.dados = JSON.parse(localStorage.getItem(this.nome)) || [];
	}
	inserir(obj)
	{
		this.dados.push(obj);
		localStorage.setItem(this.nome, JSON.stringify(this.dados));
	}
	listar()
	{
		this.dados = JSON.parse(localStorage.getItem(this.nome));
		return this.dados;
	}
	atualizar(posicao, obj)
	{
		this.dados[posicao] = obj;
		localStorage.setItem(this.nome,  JSON.stringify(this.dados));
	}
}
var banco_dados = new Banco();


//add membro
function adcionar_membro(){
	var nome = document.getElementById('nome_membro').value;
	var numero_celular =  document.getElementById('cel_membro').value;
	var email = document.getElementById('email_membro').value; 
	var cpf = document.getElementById('cpf_membro').value;
	var data_aniversario = document.getElementById('aniver_membro').value;
	var endereço = document.getElementById('end_membro').value;
	var emprego = document.getElementById('emprego_membro').value;
	var quantidade_filhos = document.getElementById('addfilho').value;
	var user = document.getElementById('cpf_membro').value;
	var senha = document.getElementById('cpf_membro').value;
	var nome_esposa = document.getElementById('nome_esp').value;
	var numero_celular_esposa =  document.getElementById('cel_esp').value;
	var email_esposa = document.getElementById('email_esp').value; 
	var cpf_esposa = document.getElementById('cpf_esp').value;
	var data_aniversario_esposa = document.getElementById('aniver_esp').value;
	var emprego_esposa = document.getElementById('emprego_esp').value;
	

	document.getElementById('nome_membro').value = '';
	document.getElementById('cel_membro').value = '';
	document.getElementById('email_membro').value = ''; 
	document.getElementById('cpf_membro').value = '';
	document.getElementById('aniver_membro').value = '';
	document.getElementById('end_membro').value = '';
	document.getElementById('emprego_membro').value = '';
	// document.getElementById('addfilho').value = '';
	document.getElementById('cpf_membro').value = '';
	document.getElementById('cpf_membro').value = '';
	document.getElementById('nome_esp').value = '';
	document.getElementById('cel_esp').value = '';
	document.getElementById('email_esp').value = ''; 
	document.getElementById('cpf_esp').value = '';
	document.getElementById('aniver_esp').value = '';
	document.getElementById('emprego_esp').value ='';


	class Novo_membro{
		constructor(nome, numero_celular, email, cpf, data_aniversario, endereço, emprego, quantidade_filhos, user, senha, nome_conjuge, numero_celular_conjuge, email_conjuge, cpf_conjuge, data_aniversario_conjuge, emprego_conjuge){
			this.nome = nome;
			this.numero_celular = numero_celular;
			this.email = email;
			this.cpf = cpf;
			this.data_aniversario = data_aniversario; 
			this.endereço = endereço;
			this.emprego = emprego;
			this.quantidade_filhos = quantidade_filhos;
			this.user = user;
			this.senha = senha;
			this.nome_conjuge = nome_conjuge;
			this.numero_celular_conjuge = numero_celular_conjuge;
			this.email_conjuge = email_conjuge;
			this.cpf_conjuge = cpf_conjuge;
			this.data_aniversario_conjuge = data_aniversario_conjuge; 
			this.emprego_conjuge = emprego_conjuge;
		}
	}

	var membro = new Novo_membro(nome,numero_celular, email, cpf, data_aniversario, endereço, emprego, quantidade_filhos, user, senha, nome_esposa, numero_celular_esposa, email_esposa, cpf_esposa, data_aniversario_esposa, emprego_esposa);	
	banco_dados.inserir(membro);
}

function buscar_membro(){
	var busc = document.getElementById('buscar').value;
	var banco = banco_dados.listar();
	var veri = 0;
	var texto;
	texto = document.getElementById('mostrar_membro');
	var pos;
	for(var i = 0; i < banco.length; i++){
		if (banco[i].cpf == busc) {
			veri = 1;
			pos = i;
			document.getElementById('buscar').value = "";
		} 
	}
	if (veri == 1)  {
		alert("usuario encontrado")
		texto.innerHTML = "";
		texto.innerHTML = "Nome Membro:" + banco[pos].nome + "<br>" + "Nome Conjuge:" + banco[pos].nome + "<br>" + 
		"Cpf Membro:" + banco[pos].cpf + "<br>" + "Cpf Conjuge:" + banco[pos].cpf_conjuge + "<br>" + "Data de Aniversario Membro:" + banco[pos].data_aniversario + "<br>" + "Data de Aniversario Membro:" + banco[pos].data_aniversario_conjuge + "<br>" +
		"Emprego Membro:" + banco[pos].emprego + "<br>" + "Emprego Conjuge:" + banco[pos].emprego_conjuge + "<br>" + 
		"Numero Membro:" + banco[pos].numero_celular + "<br>" + "Numero Conjuge:" + banco[pos].numero_celular_conjuge + "<br>" +
		"Email Membro:" + banco[pos].eamil + "<br>" + "Email Conjuge:" + banco[pos].email_conjuge + "<br>" + 
		"Endereço:" + banco[pos].endereço;
	}else{
		alert("usuario não encontrado")
	}
}
