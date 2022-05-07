let personagem = document.getElementById("personagem");
let quadrado = document.getElementById("quadrado");


function pular () {
 if (personagem.classList != "animar") {
      personagem.classList.add( "animar") 
 }

    setTimeout (function() {
        personagem.classList.remove("animar")
    }, 500);
}