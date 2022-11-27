function fazer_login() {
    var x = document.querySelector('#nomeUsuario');
    i1 = x.value;
    var y = document.querySelector('#nomeSenha')
    i2 = y.value;
    
    var s1 = 'Biel'
    var s2 = 'senha'
    
    if(i1 == s1) {
        if(i2 == s2){
              var texto= 'Bem Vindo Usuario'
              var aviso= document.querySelector('#aviso').innerHTML = texto;
              console.log("Usuário Identificado");
              alert("Usuário Identificado:\n\nBem Vindo Gabriel\n\n\nTe Direcionando para o original...");
                         window.location.assign("https:www.kabum.com.br/?gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoPJo1u_ebG2S-WW3a1MQrNDhwszixN7v9h5rQ-X3iPhYe8hbUsDfIkaAn3BEALw_wcB");
              
        }else {
            console.log("Usuário Inválido");
            alert("Usuário Inválido!!!");
        }
    }else {
        console.log("Usuário Inválido");
        alert("Usuário Inválido!!!");
    }
}    

function cu() {
    
    
   
 }
