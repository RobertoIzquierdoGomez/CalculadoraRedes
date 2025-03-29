document.querySelector("#aCalculadora").addEventListener("click", function() {
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `
            <div id="calculadoraRedes">
                <h3>Calculadora de redes</h3>
                <p>Introduce una IP para mostrarte su tipo.</p>
                <input type="text" class="inputUsuarios" id="ip" placeholder="Introduce una IP">
                <button type="button" onclick="mostrarIpYTipo()">Calcular</button>
                <button type="button" onclick="limpiarIp()">Limpiar</button>
                <div id="resultadoTipoIp">
                </div>
            </div>
    `;
});