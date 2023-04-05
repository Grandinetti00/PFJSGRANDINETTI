let inicio = document.getElementById("inicio");
inicio.addEventListener("submit", (e) => {

    e.preventDefault();

    window.onload = starImc();

    let respuesta = document.getElementById("respuesta");
    let btnreset = document.getElementById("btnReset");
    btnreset.addEventListener("click", reset);

    function starImc() {
        let btnStart = document.getElementById("btnStart");
        btnStart.addEventListener("click", calcularImc);
    };

    function calcularImc() {
        let txtWeight = document.getElementById("txtWeight");
        let peso = txtWeight.value;
        let txtHeight = document.getElementById("txtHeight");
        let altura = txtHeight.value;
        let imc = peso / ((altura / 100) * (altura / 100));
        (peso == "" || altura == "") ? respuesta.innerHTML = "Some data is missing. Please try again." : resultadoImc(imc);
    };

    function resultadoImc(indice) {
        if (indice < 18) {
            respuesta.innerHTML = "You are underweight. Signs of malnutrition.";
        } else if (indice <= 24.9) {
            respuesta.innerHTML = "You have a normal weight.";
        } else if (indice <= 29.9) {
            respuesta.innerHTML = "You are overweight.";
        } else if (indice <= 34.9) {
            respuesta.innerHTML = "You are obese.";
        } else if (indice <= 39.9) {
            respuesta.innerHTML = "You have severe obesity.";
        } else if (indice > 39.9) {
            respuesta.innerHTML = "You are morbidly obese.";
        } else {
            respuesta.innerHTML = "Something went wrong.";
        }
    };

    function reset() {
        respuesta.innerHTML = "";
        let txtWeight = document.getElementById("txtWeight");
        txtWeight.value = "";
        let txtHeight = document.getElementById("txtHeight");
        txtHeight.value = "";
    };
});