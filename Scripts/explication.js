//Script para cargar contenido de la explicación

document.querySelector("#aExplicacion").addEventListener("click", function() {
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `<div id="intro">
            <h2> Explicación</h2>
            <p>Las direcciones IP en formato IPv4 van desde <strong>0.0.0.0</strong> hasta <strong>255.255.255.255</strong>. En este proyecto nos centramos únicamente en el uso de direcciones IPv4.</p>
            <p>Estas direcciones se dividen en distintas <strong>clases</strong> (A, B y C), que determinan el tamaño de la red y cuántos dispositivos pueden conectarse. Esta clasificación se basa en el primer número de la IP.</p>

            <p>Cada IP tiene asociada una <strong>máscara de red</strong>, que nos permite saber qué parte de la dirección identifica la <strong class="red">red</strong> y qué parte identifica al <strong class="host">host</strong> (el dispositivo dentro de la red).</p>
            <p>Por ejemplo, en una IP como <code><strong class="red">192.168.1</strong><strong class="host">.10</strong></code> con una máscara <code><strong class="red">255.255.255</strong><strong class="host">.0</strong></code>, los primeros tres bloques (<code><strong class="red">192.168.1</strong></code>) indican la red, y el último bloque (<code><strong class="host">.10</strong></code>) representa el host.</p>
            <h3>Clases de IP</h3>
            <ul>
                <li><strong>Clase A:</strong> rango de <strong class="red">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong> a <strong class="red">127</strong>.<strong class="host">255</strong>.<strong class="host">255</strong>.<strong class="host">255</strong></li>
                    <ul>
                        <li><strong>Máscara de red: </strong> <strong class="red">255</strong>.<strong class="host">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong></li>
                    </ul>
                <li><strong>Clase B:</strong> rango de <strong class="red">128</strong>.<strong class="red">0</strong>.<strong class="host">0</strong>.<strong class="host">0</strong> a <strong class="red">191</strong>.<strong class="red">255</strong>.<strong class="host">255</strong>.<strong class="host">255</strong></li>
                    <ul>
                        <li><strong>Máscara de red: </strong> <strong class="red">255</strong>.<strong class="red">255</strong>.<strong class="host">0</strong>.<strong class="host">0</strong> </li>
                    </ul>
                <li><strong>Clase C:</strong> rango de <strong class="red">192</strong>.<strong class="red">0</strong>.<strong class="red">0</strong>.<strong class="host">0</strong> a <strong class="red">224</strong>.<strong class="red">255</strong>.<strong class="red">255</strong>.<strong class="host">255</strong></li>
                    <ul>
                        <li><strong>Máscara de red: </strong> </strong> <strong class="red">255</strong>.<strong class="red">255</strong>.<strong class="red">255</strong>.<strong class="host">0</strong> </li>
                    </ul>
            </ul>
        </div>`;
});
