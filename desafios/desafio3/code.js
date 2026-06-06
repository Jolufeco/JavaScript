
function calculo() {
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    let n3 = document.getElementById('n3')
    let local = document.getElementById('local');

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {

        window.alert('Falta dados')

    } else {
        
        local.innerHTML = 'contando:'

        let num1 = n1.value;
        let num2 = n2.value;
        let num3 = n3.value;
        
        for (let c = num1; c <= num2; c+= num3) {
            local.innerHTML += ` ${c} `
        }

    }

 }
