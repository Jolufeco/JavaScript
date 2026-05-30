function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var textnu = document.getElementById('idade')
    var texts = document.getElementsByName('bts');
    var textna = document.getElementById('Nome');
    var dados = document.getElementById('dados');
    var nome = textna.value;
    
    if (nome == 0 || idade >= ano) {
        alert('Algo deu errado. Por favor ensira corretamente o nome/idade e sexo.')
        
    } else {
        var idade = Number(textnu.value);
        let gênero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (texts[0].checked){
            gênero = 'Homem'
            if (idade >= 1 && idade <= 3) {
                img.setAttribute('src', './masculino/bebe.png')
            } else if (idade >= 4 && idade <=12) {
                img.setAttribute('src', './masculino/crianca.png')
            } else if (idade >= 13 && idade <=17) {
                img.setAttribute('src', './masculino/adolescente.png')
            } else if (idade >= 18 && idade <=39 ) {
                img.setAttribute('src', './masculino/Adulto.png')
            } else if (idade >= 40) {
                img.setAttribute('src', './masculino/idoso.png')
            }

        } else {
            gênero = 'Mulher'
        }

        dados.innerHTML = `detectamos  ${gênero}(${nome}) com ${idade} anos`
        dados.style.textAlign = 'center'
        dados.appendChild(img)
        

    }

}
