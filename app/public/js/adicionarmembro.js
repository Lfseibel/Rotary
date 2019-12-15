function cadastrar() {
    const nome = document.getElementById('nome_membro').value;
	const cel = document.getElementById('cel_membro').value;
	const cpf = document.getElementById('cpf_membro').value;
    const email = document.getElementById('email_membro').value;
	const aniversario = document.getElementById('aniversario_membro').value;
	const endereco = document.getElementById('endereco_membro').value;
	const emprego = document.getElementById('emprego_membro').value;
	const senha = document.getElementById('senha_membro').value;
	const nome_esp = document.getElementById('nome_esp').value;
	const cel_esp = document.getElementById('cel_esp').value;
	const cpf_esp = document.getElementById('cpf_esp').value;
	const email_esp = document.getElementById('email_esp').value;
	const aniversario_esp = document.getElementById('aniversario_esp').value;
	const endereco_esp = document.getElementById('endereco_esp').value;
	const emprego_esp = document.getElementById('emprego_esp').value;
	const nome_fi = document.getElementById('nome_fi').value;
	const cel_fi = document.getElementById('cel_fi').value;
	const cpf_fi = document.getElementById('cpf_fi').value;
	const email_fi = document.getElementById('email_fi').value;
	const aniversario_fi = document.getElementById('aniversario_fi').value;
	const endereco_fi = document.getElementById('endereco_fi').value;
	const emprego_fi = document.getElementById('emprego_fi').value;
	const nome_fi2 = document.getElementById('nome_fi2').value;
	const cel_fi2 = document.getElementById('cel_fi2').value;
	const cpf_fi2 = document.getElementById('cpf_fi2').value;
	const email_fi2 = document.getElementById('email_fi2').value;
	const aniversario_fi2 = document.getElementById('aniversario_fi2').value;
	const endereco_fi2 = document.getElementById('endereco_fi2').value;
	const emprego_fi2 = document.getElementById('emprego_fi2').value;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
    })
    $.post('/membros/salvar', { nome: nome, cel: cel, cpf: cpf, aniversario: aniversario, email: email, senha: senha, endereco: endereco, emprego: emprego, nome_esp: nome_esp, cel_esp: cel_esp, cpf_esp: cpf_esp, aniversario_esp: aniversario_esp, email_esp: email_esp, endereco_esp: endereco_esp, emprego_esp: emprego_esp, nome_fi: nome_fi, cel_fi: cel_fi, cpf_fi: cpf_fi, aniversario_fi: aniversario_fi, email_fi: email_fi, endereco_fi: endereco_fi, emprego_fi: emprego_fi, nome_fi2: nome_fi2, cel_fi2: cel_fi2, cpf_fi2: cpf_fi2, aniversario_fi2: aniversario_fi2, email_fi2: email_fi2, endereco_fi2: endereco_fi2, emprego_fi2: emprego_fi2  }, function (res) {
            if (res == 'cadastrado') {
                Toast.fire({
                    type: 'error',
                    title: 'Usuário já cadastrado no sistema'
                })
            } else if (res == 'sucesso') {
                Toast.fire({
                    type: 'success',
                    title: 'Seu cadastro foi realizado com sucesso!'
                }).then(function(){
                    location.href="/", 4100
                  })
            } else if (res == 'preencher') {
                Toast.fire({
                    type: 'warning',
                    title: 'Preencha o formulário corretamente!'
                })
            }
        });
}