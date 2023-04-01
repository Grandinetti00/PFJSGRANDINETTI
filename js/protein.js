
// function activityLevel() {
//     let protein = {
//         "1": 1.2,
//         "2": 1.4,
//         "3": 1.7,
//         "4": 2,
//         "5": 2.5
//     }
//     let election = prompt("1: Sedentary\n2: Mild\n3: Moderate\n4: Vigorous\n5: Extreme");
//     if (election == "") {
//         alert("Some data is missing. Please try again.");
//     } else {
//         return protein[election];
//     }
// };

function activityLevel() {
    let protein = {
        "sedentary": 1.2,
        "mild": 1.4,
        "moderate": 1.7,
        "vigorous": 2,
        "extreme": 2.5
    }
    let activityLevel = document.getElementById("activity");
    let actividad = activityLevel.value;
    let btnStart = document.getElementById("btnStart");
    let chirulo = protein[actividad];
    btnStart.addEventListener("click", alert(chirulo))
};

activityLevel()


function calcularProte(){
    let txtWeight = document.getElementById("txtWeight");
    let peso = txtWeight.value;
    let activityLevel = document.getElementById("activity");
    let actividad = activity.value;
    if (txtWeight === "") {
        alert("Some data is missing. Please try again.");
    } else {
        let totalProte = peso * activityLevel();
        alert(`You need ${totalProte} grams of protein per day.`);
    };
}



// let inicio = document.getElementById("inicio");
// inicio.addEventListener("submit", (e) => {

//     e.preventDefault();

//     window.onload = starImc();

//     let respuesta = document.getElementById("respuesta");
//     let btnreset = document.getElementById("btnReset");
//     btnreset.addEventListener("click", reset);

//     function starImc() {
//         let btnStart = document.getElementById("btnStart");
//         btnStart.addEventListener("click", calcularImc);
//     };

//     function calcularImc() {
//         let txtWeight = document.getElementById("txtWeight");
//         let peso = txtWeight.value;
//         let txtHeight = document.getElementById("txtHeight");
//         let altura = txtHeight.value;
//         let imc = peso / ((altura / 100) * (altura / 100));
//         if (peso == "" || altura == "") {
//             respuesta.innerHTML = "Some data is missing. Please try again.";
//         } else {
//             resultadoImc(imc);
//         }
//     };

//     function resultadoImc(indice) {
//         if (indice < 18) {
//             respuesta.innerHTML = "You are underweight. Signs of malnutrition.";
//         } else if (indice <= 24.9) {
//             respuesta.innerHTML = "You have a normal weight.";
//         } else if (indice <= 29.9) {
//             respuesta.innerHTML = "You are overweight.";
//         } else if (indice <= 34.9) {
//             respuesta.innerHTML = "You are obese.";
//         } else if (indice <= 39.9) {
//             respuesta.innerHTML = "You have severe obesity.";
//         } else if (indice > 39.9) {
//             respuesta.innerHTML = "You are morbidly obese.";
//         } else {
//             respuesta.innerHTML = "Something went wrong.";
//         }
//     };

//     function reset() {
//         respuesta.innerHTML = "";
//         let txtWeight = document.getElementById("txtWeight");
//         txtWeight.value = "";
//         let txtHeight = document.getElementById("txtHeight");
//         txtHeight.value = "";
//     };
// });