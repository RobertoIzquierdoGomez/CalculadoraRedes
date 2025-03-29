document.querySelector("#aInicio").addEventListener("click", function() {
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `
                <p>Esta página está diseñada para ayudarte a comprender y trabajar con redes IPv4. Aquí encontrarás herramientas como un transformador binario/decimal y una calculadora de redes, además de explicaciones detalladas sobre las clases de IP y sus máscaras de red.</p>
    `;
});