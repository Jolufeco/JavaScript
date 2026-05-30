function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var textnu = document.getElementById('idade')
    var texts = document.getElementsByName('bts');
    var textna = document.getElementById('Nome');
    var dados = document.getElementById('dados');
    
    if (nome == 0 || idade >= ano ) {
        alert('Algo deu errado. Por favor ensira corretamente o nome/idade e sexo.')
        
    } else {
        var nome = textna.value;
        var idade = textnu.value;
        let gênero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (texts[0].checked){
            gênero = 'Homem'
        } else {
            gênero = 'Mulher'
        }

        dados.style.textAlign = 'center'
        dados.innerHTML = `detectamos ${gênero} e com ${idade} `
    }

}
