var nome = document.getElementById('nome');
var email = document.getElementById('email');

function cadastrar(){
    let novo_nome = nome.value;
    console.log(novo_nome);
    let novo_email = email.value;
    console.log(novo_email);

    usarjson(novo_nome, novo_email);
    return false;
}

function usarjson(novo_nome, novo_email){
    
}