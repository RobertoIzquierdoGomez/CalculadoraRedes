

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
                    <div id="containerConvertidor">
            <div id="pasosDecimalBinario" class="subContainerConvertidor">
                <h2>🧮 ¿Cómo convertir un número decimal a binario?</h2>
                <p>Si quieres saber cómo transformar un número decimal a binario... ¡tranquilo/a! es más fácil de lo que parece. Solo necesitas dividir y anotar. Aquí te mostramos cómo hacerlo paso a paso:</p>

                <h3>✨ <u>Pasos para convertir un decimal a binario:</u></h3>
                <ol class="pasosConvertir">
                    <li>Divide el número entre 2.</li>
                    <li>Guarda el residuo (será 0 o 1).</li>
                    <li>Vuelve a dividir el cociente entre 2 y guarda el nuevo residuo.</li>
                    <li>Repite hasta que el cociente sea 0.</li>
                    <li>Une los residuos al revés: ¡ese es tu número binario!</li>
                </ol>
                <h3>🧪 <u>Ejemplo práctico:</u></h3>
                <p>Convierte el número 13 a binario:</p>
                <table class="tableOperations">
                    <tr>
                        <th>División</th><th>Cociente</th><th>Residuo</th>
                    </tr>
                    <tr>
                        <td>13 ÷ 2</td><td>6</td><td>1</td>
                    </tr>
                    <tr>
                        <td>6 ÷ 2</td><td>3</td><td>0</td>
                    </tr>
                    <tr>
                        <td>3 ÷ 2</td><td>1</td><td>1</td>
                    </tr>
                    <tr>
                        <td>1 ÷ 2</td><td>0</td><td>1</td>
                    </tr>
                </table>
                <p>Resultado: lee los residuos al revés 👉 1101</p>
            </div>
            <div id="pasosBinarioDecimal" class="subContainerConvertidor">
                <h2>🔁 ¿Cómo convertir un número binario a decimal?</h2>
                <p>Pasar de binario a decimal es cuestión de sumar potencias de 2. Cada dígito (bit) en el binario tiene un valor según su posición, empezando desde la derecha.</p>

                <h3>✨ <u>Pasos para convertir un binario a decimal:</u></h3>
                <ol class="pasosConvertir">
                    <li>Escribe el número binario.</li>
                    <li>Asigna potencias de 2 a cada dígito, desde la derecha (2⁰, 2¹, 2², etc.).</li>
                    <li>Multiplica cada bit por su potencia correspondiente.</li>
                    <li>Suma todos los resultados.</li>
                    <li>El total es tu número en decimal.</li>
                </ol>

                <h3>🧪 <u>Ejemplo práctico:</u></h3>
                <p>Convierte el número binario 1101 a decimal:</p>
                <table class="tableOperations">
                    <tr>
                        <th>Bit</th>
                        <th>Potencia de 2</th>
                        <th>Cálculo</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2³ = 8</td>
                        <td>1 × 8 = 8</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2² = 4</td>
                        <td>1 × 4 = 4</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>2¹ = 2</td>
                        <td>0 × 2 = 0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2⁰ = 1</td>
                        <td>1 × 1 = 1</td>
                    </tr>
                </table>
                Resultado: 8 + 4 + 0 + 1 = 13
            </div>
        </div>
    `;
});