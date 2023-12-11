var boton = document.getElementById("button");
var entrada = document.getElementById("inputnum");

boton.addEventListener("click", function () {
    var peso = parseFloat(entrada.value);
    var resultado;

    if (peso <= 30) {
        resultado = holliday(peso);
    } else {
        resultado = calcularSuperficieCorporal(peso);
    }

    console.log(resultado);
});

//Esta es la función Holliday que calcula cuando el peso es menor a 30.
function holliday(peso) {
    var volumen_diario;

    if (peso <= 10) {
        volumen_diario = peso * 100;
    } else if (peso <= 20) {
        volumen_diario = (10 * 100) + ((peso - 10) * 50);
    } else {
        volumen_diario = ((10 * 100) + (10 * 50) + ((peso - 20) * 20));
    }
    //me cuesta demasiado devolver los resultados sin tener que manipular el DOM directamente, arreglaré eso eventualmente, mientras tanto, si funciona no lo toques.
    var mantenimiento = volumen_diario / 24;
    var m_mas_m_sobre_2 = mantenimiento * 1.5
    var resultadoTexto = 'El volumen diario en cc es: ' + volumen_diario + 'cc\n';

    resultadoTexto += 'El mantenimiento(o flujo horario) es: ' + mantenimiento.toFixed(2) + 'cc/hr\n';
    resultadoTexto += 'El valor de mantenimiento + medio mantenimiento es: ' + m_mas_m_sobre_2.toFixed(2) + 'cc/hr\n';

    document.getElementById('resultado').innerText = resultadoTexto;

    console.log(volumen_diario, mantenimiento);

    return { volumen_diario: volumen_diario, mantenimiento: mantenimiento, m_mas_m_sobre_2: m_mas_m_sobre_2 };
}

function calcularSuperficieCorporal(peso) {
    var sc = (((peso * 4) + 7) / (peso + 90));
    var x1500 = sc * 1500;
    var x2000 = sc * 2000;
    
    var resultadoTexto = 'Superficie corporal es igual a: ' + sc.toFixed(2) + '\n';
    resultadoTexto += '(Multiplicado por 1500) Volumen diario en cc es: ' + x1500.toFixed(2) + '\n';
    resultadoTexto += '(Multiplicado por 2000) Volumen diario en cc es: ' + x2000.toFixed(2) + '\n';
    
    document.getElementById('resultado').innerText = resultadoTexto;

    return { sc: sc, x1500: x1500, x2000: x2000 };
}