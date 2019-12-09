function checar(){
	var adicionar = document.getElementById('addfilho');
	var select = adicionar.options[adicionar.selectedIndex].value;
	if (select == '1') {
		addfilhote();
	} else if (select == '2'){
		addfilhote();
		addfilhote();
	} else if (select == '3'){
		addfilhote();
		addfilhote();
		addfilhote();
	} else if (select == '4'){
		addfilhote();
		addfilhote();
		addfilhote();
		addfilhote();
	} else if (select == '5'){
		addfilhote();
		addfilhote();
		addfilhote();
		addfilhote();
		addfilhote();
	}
}


// alert(select)
function addfilhote() {
	var add = document.querySelector('.formadd');
	add.innerHTML += "<div class='innerfilho'> <input class='nome_fil' type='text' name='nome' placeholder='Nome'><input type='number' name='cel' class='cel_fil' placeholder='Celular'><input type='email' class='em_fil' name='email' placeholder='E-mail'><input type='number' class='cpf_fil' name='cpf' placeholder='CPF'><input type='date' class='niver_fil' name='aniversario' placeholder='Aniversário'><input type='text' class='end_fil' name='endereco' placeholder='Endereco'><input type='text' class='emprego_fil' name='emprego' placeholder='Emprego'></div>"
}



