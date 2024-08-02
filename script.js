const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
// console.table(matrizCodigo)

function btnEncriptar() {
    const textoencriptado = encriptar(textArea.value);
    message.value = textoencriptado;
    textArea.value = "";
}

function encriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][0])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        
    }

    return stringDesencriptar;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    message.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        
    }

    return stringDesencriptar;
}

function btnCopiar() {
    message.select();
    message.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}