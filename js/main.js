let consejos = {"1":"Se recomienda comenzar una dieta para estar en superavit calórico.", 
"2":"Arme rutinas para mantener el buen ritmo.",
"3":"Trate de aumentar su actividad física. Dos o tres veces por semana es lo recomendable para empezar.",
"4":"Se recomienda comenzar una dieta para generar déficit calórico. Además, es recomendado inicar actividad física.",
"5":"Se recomienda que consulte a un médico lo antes posible. Su salud está en riesgo."}

function resultadoImc (indice) {
    if (indice  < 18){
        alert("Usted tiene bajo peso. Signos de desnutrición.");
    }else if (indice <= 24.9) {
        alert("Usted tiene un peso normal.");
    }else if (indice <= 29.9) {
        alert("Usted tiene sobrepeso.");
    } else if (indice <= 34.9) {
        alert("Usted tiene obesidad.");
    } else if (indice <= 39.9) {
        alert("Usted tiene obesidad severa.");
    } else if (indice > 39.9) {
        alert("Usted tiene obesidad morbida.");
    } else {
        alert("Algo ha malido sal.");
    }
}

function darConsejo() {
    let eleccion = prompt("¿Cuál es su condición? Soy una persona con peso:\n1: Bajo\n2: Normal\n3: Sobrepeso\n4: Obesidad\n5: Obesidad morbida")
    if (eleccion == ""){
        alert("Por favor, indique una condición");
    } else {
        for(let key in consejos){
            if (key == eleccion) {
                alert(consejos[key]);
            }
        }
    }
}

function crearTips() {
    let buenosAlimentos = ["alimentos integrales.", 
                           "frutas.", 
                           "carnes magras y huevo.", 
                           "legumbres, cereales y frutos secos.", 
                           "verduras de estación."];

    let malosAlimentos = ["alimentos fritos.", 
                          "comidas con alto contenido en azucar.", 
                          "alimentos procesados.", 
                          "comida rapida/chatarra.", 
                          "alimentos con alto contenido en sodio."];
    let tips = [];
    buenosAlimentos.map(x => tips.push(concatenar(x, "Debe comer más ")));
    malosAlimentos.map(x => tips.push(concatenar(x, "Debe comer menos ")));
    return tips
}

function concatenar(elemento, prefijo) {
    return prefijo + `${elemento}`;
}

class Usuario {
    constructor(nombre, edad, sexo) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
    }
    getNombre(){return this.nombre};
}
  
  const nuevoUsurario = new Usuario(
    prompt("Ingrese su nombre:"),
    prompt("Ingrese su edad:"), 
    prompt("Ingrese su sexo:"));

    console.log (nuevoUsurario.getNombre())

let start = "si"
while (start == "si"){
    let question = prompt(`BIENVENIDO ${nuevoUsurario.nombre} \nSi querés conocer tu índice de masa corporal (IMC), escribí 1
    \nSi querés recomendaciones de salud, escribí 2 
    \nSi querés ideas para tu dieta, escribí 3`);
    if (question == "1") {
        let peso = Number(prompt ("Por favor ingrese su peso en kilos:"));
        let altura = Number(prompt ("Por favor ingrese su altura en centimetros:"));
        let imc = peso / ((altura/100)*(altura/100));
        if (peso == "" || altura == ""){
            alert("Falta algún dato. Intentelo nuevamente.");
        } else {   
            resultadoImc(imc);
        }
    } else if (question == "2") {
            darConsejo();
    } else if (question == "3") {
            let tips = crearTips();
            let pregunta = parseInt(prompt("¿Cuántas ideas querés para incorporar a tu dieta?"));
            if (pregunta <= tips.length) {
                for (let x = 0; x < pregunta; x++) {
                    alert(tips.shift());
                    console.log(tips);
                }
            } else {
                alert(`Intente con un número del 1 al ${tips.length}.`)
            }
    } else {
        alert("Tiene que escribir alguna de las opciones anteriores.");
    }
    start = prompt("¿Desea continuar usando la aplicación?");
    start = start.toLowerCase();
}
alert(`Gracias ${nuevoUsurario.nombre}. Vuelvan prontos!`);



