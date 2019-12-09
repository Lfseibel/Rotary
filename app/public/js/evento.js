var soma=0;
var cont=0
var	tabela=document.getElementById('pessoas');
function membros(){
	let banco= JSON.parse(localStorage.getItem('Rotary Club')) || []
	while(cont<banco.length){
		let el=document.createElement('tr');
		el.className='pessoa';
		el.id='pessoa_'+cont;
		let el_f1=document.createElement('td');
		let h4=document.createElement('h4');
		h4.id='nome_pessoa_'+cont;
		h4.textContent=banco[cont].nome;
		el_f1.appendChild(h4);
		let el_f2=document.createElement('td');
		let input=document.createElement('input');
		input.type='number';
		input.placeholder="numero de convites";
		input.id="convites_pessoa"+cont;
		el_f2.appendChild(input);
		el.appendChild(el_f1);
		el.appendChild(el_f2);
		pessoas.appendChild(el);
		cont++
	}
}
class Evento{
	constructor(nome,data,horario,local,convites,pessoas,descricao,membros){
		this.nome=nome;
		this.data=data;
		this.horario=horario;
		this.local=local;
		this.convites=convites;
		this.pessoas=pessoas;
		this.descricao=descricao;
		this.membros=membros;
	}
}
membros();
class Pessoa{
	constructor(nome,convites){
		this.nome=nome;
		this.convites=convites;
	}
}
function criar_evento() {
	let nome=document.getElementById('nome_evento').value;
	let data=document.getElementById('data_evento').value;
	let horario=document.getElementById('horario_evento').value;
	let local=document.getElementById('local_evento').value;
	let convites=document.getElementById('convites_evento').value;
	let pessoas=document.getElementById('pessoas_evento').value;
	let descricao=document.getElementById('descricao_evento').value;
	let membros=new Array();
	let i=0
	while(i<cont){
		let id_membro='convites_pessoa'+i
		let convites_membro=document.getElementById(id_membro).value
		let nome_membro='nome_pessoa_'+i;
		let nome_pessoa=document.getElementById(nome_membro).textContent
		let membro=new Pessoa(nome_pessoa,convites_membro)
		membros[i]=JSON.stringify(membro)
		i++
	}
	let evento=new Evento(nome,data,horario,local,convites,pessoas,descricao,membros);
	var banco=JSON.parse(localStorage.getItem('Evento')) || [];
	banco.push(evento)
	localStorage.setItem('Evento', JSON.stringify(banco))
}