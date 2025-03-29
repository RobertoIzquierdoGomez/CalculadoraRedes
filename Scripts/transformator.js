

document.querySelector("#aTransformador").addEventListener("click", function() {
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `
                <div id="tranformadorBinarioDecimal">
                <h3>Transformador Binario/Decimal</h3>
                <input type="radio" id="decimalBinario" name="transformador" value="decimalBinario" checked>
                <label for="rojo">Decimal a Binario</label>
                <input type="radio" id="binarioDecimal" name="transformador" value="binarioDecimal">
                <label for="azul">Binario a Decimal</label><br>
                <input id="inputTransformador" class="inputUsuarios" type="number" name="transformador" placeholder="Introduce un número"><br>
                <button onclick="transformar()">Calcular</button>
                <button onclick="limpiarTransformador()">Limpiar</button>
                <strong><p id="resultadoTransformador">Resultado</p></strong>
            </div>
    `;
});