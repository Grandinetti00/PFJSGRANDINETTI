
let inicio = document.getElementById("inicio");

inicio.addEventListener("submit", (e) => {

    e.preventDefault();

    window.onload = starImc();

    let respuesta = document.getElementById("respuesta");
    let btnreset = document.getElementById("btnReset");
    btnreset.addEventListener("click", reset);

    function starProte() {
        let btnStart = document.getElementById("btnStart");
        btnStart.addEventListener("click", calcularProte);
    };

    function activityLevel() {

        let protein = {
            "sedentary": 1.2,
            "mild": 1.4,
            "moderate": 1.7,    
            "vigorous": 2,
            "extreme": 2.5
    }

        let activityLevel = document.getElementById("activityLevel");
        let actividad = activityLevel.value;
        let btnStart = document.getElementById("btnStart");
        let chirulo = protein[actividad];
        btnStart.addEventListener("click", alert(chirulo))

    };

activityLevel()

function calcularProte(){

    let txtWeight = document.getElementById("txtWeight");
    let peso = txtWeight.value;
    let activityLevel = document.getElementById("activityLevel");
    let actividad = activityLevel();
    
    if (txtWeight === "") {
        alert("Some data is missing. Please try again.");
    } else {
        let totalProte = peso * actividad;
        alert(`You need ${totalProte} grams of protein per day.`);
    };

}
}
----------------
<form action="" id="inicio">
<label for="">WEIGHT (Kg):</label> <input id="txtWeight" type="number">
<label for="">ACTIVITY LEVEL:</label> <input id="avtivityLevel" type="dropdown">
<section class="botones">
    <button id="btnStart">START</button>
    <button id="btnReset">RESET</button>
</section>
<p class="respuesta" id="respuesta"> </p>
</form>