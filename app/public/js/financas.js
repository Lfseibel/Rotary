function adicionar() {
   
    const quantidade = document.getElementById('valor_alter').value;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2900
    })
    $.post('/financas/adicionar', { quantidade: quantidade}, function (res) {
           if (res == 'sucesso') {
                Toast.fire({
                    type: 'success',
                    title: 'Alteracao realizada com sucesso!'
                }).then(function(){
                    location.href="/tesoureiro", 3000
                  })
            } else if (res == 'preencher') {
                Toast.fire({
                    type: 'warning',
                    title: 'Preencha o formulário corretamente!'
                })
            }
        });
}

function subtrair() {
   
    const quantidade = document.getElementById('valor_alter').value;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2900
    })
    $.post('/financas/subtrair', { quantidade: quantidade}, function (res) {
           if (res == 'sucesso') {
                Toast.fire({
                    type: 'success',
                    title: 'Alteracao realizada com sucesso!'
                }).then(function(){
                    location.href="/resoureiro", 3000
                  })
            } else if (res == 'preencher') {
                Toast.fire({
                    type: 'warning',
                    title: 'Preencha o formulário corretamente!'
                })
            }
        });
}
