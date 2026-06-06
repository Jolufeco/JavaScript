
function calculo() {
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    let n3 = document.getElementById('n3')
    let local = document.getElementById('local');

    if (n1.value.length == 0 || n2.value.length == 0) {
        local.innerHTML = "impossível contar!"

    } else {
        
        local.innerHTML = '<strong>contando: </strong> <br>'

        let num1 = Number(n1.value);
        let num2 = Number(n2.value);
        let num3 = Number(n3.value);

        if (num3 <= 0 ) {
            window.alert('Impossível contar com passos = 0. Será considerado = 1.')
            num3 = 1;
        }   
            
            if (num1 < num2){
    
                for (let c = num1; c <= num2; c+= num3) {
                    local.innerHTML += ` <strong>${c}</strong> \u{1F449} `
                }
                
            } else {
    
                for(let c = num1; c >= num2; c -= num3) {
                    local.innerHTML += `<strong>${c}</strong> \u{1F449}`
                }
            }

        
        local.innerHTML += `\u{1F3C1}`


    }

 }
