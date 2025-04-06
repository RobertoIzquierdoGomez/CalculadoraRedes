document.querySelector("#aInicio").addEventListener("click", function() {
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `
        <div id="startContent">
            <h1>Calculadora de Redes IP y Conversor de Binario a Decimal</h1>
            <p>Bienvenido a esta web dedicada al mundo de las redes informáticas.</p>
            <p>Este sitio forma parte de un proyecto personal dentro del ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM), y su objetivo es ofrecer una serie de herramientas y explicaciones que te ayudarán a comprender mejor algunos conceptos clave relacionados con las redes.</p>
            </p>Aquí encontrarás:</p>
            <ul id="listaInicio">
                <li>Una introducción teórica sobre qué son las redes, para qué se utilizan y por qué son fundamentales en el ámbito de la informática.</li>
                <li>Un conversor de binario a decimal y viceversa, ideal para practicar y entender cómo funcionan las direcciones IP y otros elementos de red.</li>
                <li>Una herramienta para identificar la clase de una dirección IP, útil para reconocer si una IP pertenece a una red A, B o C.</li>
                <li>Un sistema de cálculo de subredes, donde podrás indicar cuántas subredes necesitas y la aplicación te ayudará a generarlas.</li>
            </ul>
            <p>Esta web está pensada como un recurso didáctico sencillo pero funcional, tanto para estudiantes como para cualquier persona interesada en aprender sobre redes. ¡Espero que te sea útil!</p>
        </div>
    `;
});