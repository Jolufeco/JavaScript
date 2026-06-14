let number = []
var msg = document.getElementById('msg')
var mensa = document.createElement('p')

function clicar() {
    var n1 = document.getElementById('n1')
    var num = Number(n1.value)
    if (num <= 0) {
    alert('parece que deu algum erro. por favor, digite um número.')
} else {

    var select = document.getElementById('res')
    number.push(num)
    
    
    var opcao = document.createElement('option')
    opcao.text =`o número ${num} foi adicionado`
    select.appendChild(opcao)
    mensa.innerHTML = ""
    

}
n1.value = ""
n1.focus()

    
    
}

function finalizar() {
    if (number == 0) {
        alert('Sua lista não possui nenhum valor. Por favor, digite algum.')
    } else {
        let maior = number[0]
        let menor = number[0]
        var soma = 0
        for(let pos in number) {
           soma += number[pos]
            if(number[pos] > maior) {
                maior = number[pos]
            }
            if(number[pos] < menor) {
                menor = number[pos]
            }
            
        }

        let média = soma % number.length

        mensa.innerHTML = `Essa lista possui ${number.length} item(s). <br> `
        mensa.innerHTML += `O maior número nessa lista é ${maior}. <br>`
        mensa.innerHTML += `O menor número nessa lista é ${menor}. <br>`
        mensa.innerHTML += `A soma desses números nessa lista é ${soma}. <br>`
         mensa.innerHTML += `A média desses números nessa lista é ${média}. <br>`
        msg.appendChild(mensa)  
        
    }

}
