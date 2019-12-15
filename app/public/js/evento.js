function cadastro_evento() {
	
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const local = document.getElementById('local').value;
    const pessoas = document.getElementById('pessoas').value;
    const descricao = document.getElementById('descricao').value;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2900
    })
    $.post('/evento/adicionar', { nome: nome, data: data, horario: horario, local: local, pessoas: pessoas, descricao: descricao }, function (res) {
            if (res == 'cadastrado') {
                Toast.fire({
                    type: 'error',
                    title: 'Evento já cadastrado no sistema'
                })
            } else if (res == 'sucesso') {
                Toast.fire({
                    type: 'success',
                    title: 'Evento cadastro com sucesso!'
                }).then(function(){
                    location.href="/eventos", 3000
                  })
            } else if (res == 'preencher') {
                Toast.fire({
                    type: 'warning',
                    title: 'Preencha o formulário corretamente!'
                })
            }
        });
}

function cadastro_venda() {
	
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const quantidade = document.getElementById('quantidade').value;
    const rotariano = document.getElementById('rotariano').value;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2900
    })
    $.post('/venda/adicionar', { nome: nome, valor: valor, quantidade: quantidade, rotariano: rotariano}, function (res) {
           if (res == 'sucesso') {
                Toast.fire({
                    type: 'success',
                    title: 'Venda cadastrada com sucesso!'
                }).then(function(){
                    location.href="/vendas", 3000
                  })
            } else if (res == 'preencher') {
                Toast.fire({
                    type: 'warning',
                    title: 'Preencha o formulário corretamente!'
                })
            }
        });
}

function realizar_venda() {
   
    const id = document.getElementById('id').value;
    const quantidade = document.getElementById('vender').value;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2900
    })
    $.post('/venda/realizar', { quantidade: quantidade, id: id}, function (res) {
           if (res == 'sucesso') {
                Toast.fire({
                    type: 'success',
                    title: 'Venda cadastrada com sucesso!'
                }).then(function(){
                    location.href="/vendas", 3000
                  })
            } else if (res == 'preencher') {
                Toast.fire({
                    type: 'warning',
                    title: 'Preencha o formulário corretamente!'
                })
            }
        });
}
