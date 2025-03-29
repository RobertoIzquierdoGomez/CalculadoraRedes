/* ************************************************************************************

************* OBSOLETAS *************

function mostrarIp() {
    let ip = document.getElementById("ip").value;
    document.getElementById("resultadoTipoIp").innerText = "La IP es " + ip;
}

* Función para comprobar si el radio está marcado y coger su valor

function radio() {
    let selectedRadio = document.querySelector('input[name="transformador"]:checked');
    if (selectedRadio) {
        return selectedRadio.value;  // Devuelve el valor del radio seleccionado
    } else {
        console.log("No se ha seleccionado ningún radio.");
        return null;  // Devuelve null si no hay radio seleccionado
    }
}


*Función que sirve para coger el primer numero introducido de la IP.
function cogerIp(){
    let posicion;
    ipUsuario = document.getElementById("ip").value;
    posicion = ipUsuario.indexOf(".");
    document.getElementById("resultadoTipoIp").innerText = ipUsuario.substring(0,posicion);
}



**********************************************************************************************/


function limpiarIp() {
    document.getElementById("resultadoTipoIp").innerText = "";
    document.getElementById("ip").value = "";
}

// Función para transformar de decimal a binario
function transformar() {
    let selectedRadio = document.querySelector('input[name="transformador"]:checked');
    // Obtener el valor del radio seleccionado o null si no hay selección
    let opcion = selectedRadio ? selectedRadio.value : null;      
    switch (opcion) {
        case "decimalBinario":
            decimalABinario();
            break;
        case "binarioDecimal":
            binarioADecimal();
            break;                
        default:// Si no se selecciona ninguna opción.  
            document.getElementById("resultadoTransformador").innerText = "Debes seleccionar una opción";
            break;
    }
};


function decimalABinario(){
    let numDecimal = parseInt(document.getElementById("inputTransformador").value);
    // Si no es un número válido
    if (isNaN(numDecimal)) {
        document.getElementById("resultadoTransformador").innerText = "Ingrese un número válido";
        return;
    }

    let numBinario = "";
    
    while (numDecimal > 0) {
        numBinario = (numDecimal % 2) + numBinario; // Construir el binario en orden correcto
        numDecimal = Math.floor(numDecimal / 2);
    }

    document.getElementById("resultadoTransformador").innerText = numBinario || "0"; // Si es 0, mostrar "0"
}

function binarioADecimal() {
    let binario;
    let resultado = 0;
    let potencia = 0;

    binario = parseInt(document.getElementById("inputTransformador").value);
    if (isNaN(binario)) {
        document.getElementById("resultadoTransformador").innerText = "Ingrese un número válido";
        return;
    }
    // Verificar si el número es un binario válido (solo contiene 0s y 1s)
    while (binario > 0) {
        let digito = binario % 10;
        if (digito != 0 && digito != 1) {
            document.getElementById("resultadoTransformador").innerText = "No es un número binario válido";
            return;
        }
        // Convertir el dígito binario al valor decimal correspondiente
        resultado += digito * Math.pow(2, potencia);
        potencia++;
        // Eliminar el último dígito binario
        binario = Math.floor(binario / 10);
    }
    // Mostrar el resultado en el HTML
    document.getElementById("resultadoTransformador").innerText = resultado;
}

function limpiarTransformador() {
    document.getElementById("inputTransformador").value = "";
    document.getElementById("resultadoTransformador").innerText = "Resultado";
    let radios = document.querySelectorAll('input[name="transformador"]');
    //radios.forEach(radio => radio.checked = false); //Esta funcion deseleccionaba los radios. Al cambiar a uno por defecto, no es necesario reiniciarlo
}

let ip = [];
let ipUsuario;

//Funcion para la IP introduca por el usuario te lo devuelva en un Array.
function anadirIp() {
    let ip = document.getElementById("ip").value.trim().split(".");
    return ip; // Devolvemos el array para usarlo en otras funciones
}

//Comprueba si la IP introducida es válida
function ipValida() {
    let ipUsuario = document.getElementById("ip").value.trim(); // Eliminar espacios extra
    let puntos = 0;

    // Verificar longitud válida de IP (mínimo 7 caracteres "0.0.0.0", máximo 15 "255.255.255.255")
    if (ipUsuario.length > 15 || ipUsuario.length < 7) {
        return false;
    }

    // Contar los puntos en la IP
    for (let i = 0; i < ipUsuario.length; i++) {
        if (ipUsuario.charAt(i) === ".") {
            puntos++;
        }
    }

    // Si tiene más o menos de 3 puntos, es inválida
    if (puntos !== 3) {
        return false;
    }

    let ip = anadirIp(); // Obtenemos el array de la IP
    if (ip.length !== 4) {
        return false;
    }

    // Verificar que cada parte de la IP está en el rango 0-255 y que tiene entre 1 y 3 dígitos
    for (let i = 0; i < ip.length; i++) {
        if (ip[i].length < 1 || ip[i].length > 3) {
            return false;
        }
        let num = parseInt(ip[i]); // Convertimos a número
        if (isNaN(num) || num < 0 || num > 255) {
            return false;
        }
    }
    return true;
}


//Funcion para ejecutar el codigo y ver si la IP es valida.
//En caso de ser válida la añade al array ip y lo imprime.
function mostrarIpYTipo() {
    let tipoIp;
    if (ipValida()) {
        ip = anadirIp();
        if (ip[0] < 128) {
            tipoIp = "clase A";
        } else if (ip[0] < 192) {
            tipoIp = "clase B";
        } else {
            tipoIp = "clase C";
        }

        /* Mostramos la IP y su clase. También hacemos HTML para calcular subredes */
        document.getElementById("resultadoTipoIp").innerHTML = `
        <p>La ip <strong>${document.getElementById("ip").value}</strong> es de ${tipoIp}</p>
        <input type="number" class="inputUsuarios" id="inputSubredes" placeholder="Nº Subredes">
        <div id="subredesContainer"></div>
        `;

        // Añadir un evento para actualizar las subredes dinámicamente
        const inputSubredes = document.getElementById("inputSubredes");
        inputSubredes.addEventListener("input", () => {
            document.getElementById("subredesContainer").innerHTML = subredes(inputSubredes.value);
        });

    } else {
        document.getElementById("resultadoTipoIp").innerText = "Tienes que introducir una IP válida. Por ejemplo: 192.168.1.1";
    }
}

function subredes(value) {
    let htmlSubredes = ``;
    if (value && !isNaN(value) && value > 0) {
        htmlSubredes += `
        <select id="opciones" class="inputUsuarios" name="opciones" style="margin-top: 15px;">
            ${Array.from({ length: value }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
        </select>
        <label>Elige la subred</label>`;
    }
    return htmlSubredes;
}


