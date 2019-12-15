function login_rotariano() {
  const cpf = document.getElementById('cpf').value;
  const senha = document.getElementById('senha').value;
  const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000
  })
      $.post('/login/rotariano', { cpf: cpf, senha: senha }, function (res) {
              if (res == 'cadastro') {
                  Toast.fire({
                      type: 'warning',
                      title: 'Usuário não cadastrado no sistema, realize o cadastro para prosseguir!'
                  })
              } else if (res == 'erro') {
                  Toast.fire({
                      type: 'error',
                      title: 'Usuário ou senha incorretos!'
                  })
              } else if (res == 'preencher') {
                  Toast.fire({
                      type: 'warning',
                      title: 'Preencha todos os campos!'
                  })
              } else if (res == 'entrada') {
                  Toast.fire({
                      type: 'success',
                      title: 'Seja bem-vindo!',
                      timer: 1000
                  }).then(function(){
                      location.href="/membro"
                    })
              }
      });
}

function login_presidente() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
    })
        $.post('/login/presidente', { cpf: cpf, senha: senha }, function (res) {
                if (res == 'cadastro') {
                    Toast.fire({
                        type: 'warning',
                        title: 'Usuário não cadastrado no sistema, realize o cadastro para prosseguir!'
                    })
                } else if (res == 'erro') {
                    Toast.fire({
                        type: 'error',
                        title: 'Usuário ou senha incorretos!'
                    })
                } else if (res == 'preencher') {
                    Toast.fire({
                        type: 'warning',
                        title: 'Preencha todos os campos!'
                    })
                } else if (res == 'entrada') {
                    Toast.fire({
                        type: 'success',
                        title: 'Seja bem-vindo!',
                        timer: 1000
                    }).then(function(){
                        location.href="/presidente"
                      })
                }
        });
  }

  function login_tesoureiro() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
    })
        $.post('/login/tesoureiro', { cpf: cpf, senha: senha }, function (res) {
                if (res == 'cadastro') {
                    Toast.fire({
                        type: 'warning',
                        title: 'Usuário não cadastrado no sistema, realize o cadastro para prosseguir!'
                    })
                } else if (res == 'erro') {
                    Toast.fire({
                        type: 'error',
                        title: 'Usuário ou senha incorretos!'
                    })
                } else if (res == 'preencher') {
                    Toast.fire({
                        type: 'warning',
                        title: 'Preencha todos os campos!'
                    })
                } else if (res == 'entrada') {
                    Toast.fire({
                        type: 'success',
                        title: 'Seja bem-vindo!',
                        timer: 1000
                    }).then(function(){
                        location.href="/tesoureiro"
                      })
                }
        });
  }