function clicar() {
    var tab = document.getElementById('setm')
    var n1 = document.getElementById('n1')
    
    if (n1.value == 0) {
        window.alert('Por Favor, digite um outro número.')
    } else {
        var num = Number(n1.value)
        tab.innerHTML = ""
        for (c = 1; c <= 10; c++) {
            var a = document.createElement('option')
            a.text = `${num} x ${c} = ${c*num} `
            setm.appendChild(a)
        }
    }
    
}

var secao = document.getElementById('secao')
function mouseentra() {
        secao.style.height = '435px'
    }

    function mousesai() {
        secao.style.height = '131.2px'
    }