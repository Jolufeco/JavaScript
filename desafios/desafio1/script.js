function carregar(){
    var hoje =  new Date()
    var horas = hoje.getHours();
    var minutos = hoje.getMinutes();
    var titulo = document.getElementById('titulo');
    var textoh = document.getElementById('textoh');
    var foto = document.getElementById('foto');
    var fundo = document.body;
    
    textoh.innerHTML = `Agora são <strong>${horas} horas </strong>e <strong>${minutos} minutos</strong>.`;

    
    if (horas >= 6 && horas < 13 ){
        // BOM DIA
        titulo.innerHTML = "Bom dia!";
        fundo.style.backgroundColor = "lightblue";
        foto.src = './imagens/manha.png';
    } else if (horas >= 13 && horas < 19) {
        //BOA TARDE
        titulo.innerHTML = "Boa tarde!";
        foto.src = './imagens/tarde.png';
    } else {
        //BOA NOITE
        titulo.innerHTML = "Boa noite!";
        fundo.style.backgroundColor = "gray";
        
    }
}

