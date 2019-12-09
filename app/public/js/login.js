// alert('a')

function login(){
    var nome = document.getElementById('nome_comp').value;
    var senha = document.getElementById('password').value;
    var user = document.getElementById('usuario').value;

    if ((nome=='presidente')&&(senha=='adm')&&(user=='presidente')) {
      window.location.href = "perfil_presidente.html";
    }else
    if ((nome=='tesoureiro')&&(senha=='adm')&&(user=='tesoureiro')) {
      window.location.href = "perfil_tesoureiro.html";
    }
}
