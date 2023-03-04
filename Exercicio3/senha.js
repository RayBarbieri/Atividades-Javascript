var senha = document.querySelector('#senha');
var botao = document.querySelector('#botao');

botao.addEventListener("click", function(){
    if(senha.value === "369258"){
        alert('senha correta');
        window.location.href = "https://google.com.br"
        return;
    }else{
        alert('senha incorreta');
        return;
    }
})
