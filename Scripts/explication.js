//Script para cargar contenido de la explicación

document.querySelector("#aExplicacion").addEventListener("click", function() {
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `<div id="intro">
            <h2> Explicación</h2>
            <p> Los rangos de IP van desde <strong>0.0.0.0</strong> a <strong>255.255.255.255</strong> en este proyecto nos centramos únicamente en IPv4</p>
            <p>En función de la IP se dividen en distintas clases que sirven para identificar su <strong>máscara de red.</strong> La máscara de red sirve para identificar qué parte de la IP pertenece a <strong class="red">red</strong> y qué parte a <strong class="host">host.</strong></p>
            <h3>Clases de IP</h3>
            <ul>
                <li><strong>Clase A:</strong> rango de <strong class="red">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong> a <strong class="red">127</strong>.<strong class="host">255</strong>.<strong class="host">255</strong>.<strong class="host">255</strong></li>
                    <ul>
                        <li><strong>Máscara de red: </strong> <strong class="red">255</strong>.<strong class="host">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong></li>
                    </ul>
                <li><strong>Clase B:</strong> rango de <strong class="red">128</strong>.<strong class="host">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong> a <strong class="red">191</strong>.<strong class="host">255</strong>.<strong class="host">255</strong>.<strong class="host">255</strong></li>
                    <ul>
                        <li><strong>Máscara de red: </strong> <strong class="red">255</strong>.<strong class="host">255</strong>.<strong class="host">0</strong>.<strong class="host">0</strong> </li>
                    </ul>
                <li><strong>Clase C:</strong> rango de <strong class="red">192</strong>.<strong class="host">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong> a <strong class="red">224</strong>.<strong class="host">255</strong>.<strong class="host">255</strong>.<strong class="host">255</strong></li>
                    <ul>
                        <li><strong>Máscara de red: </strong> </strong> <strong class="red">255</strong>.<strong class="host">255</strong>.<strong class="host">255</strong>.<strong class="host">0</strong> </li>
                    </ul>
            </ul>
        </div>`;
});
