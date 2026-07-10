function estudiante(nombre, documento, aprobado) {
    this.nombre = nombre;
    this.documento = documento;
    this.aprobado = aprobado

     this.mostrarResultado = function() {
        return `El estudiante ${this.nombre} con documento ${this.documento} ${this.aprobado}`;
    };

}

let notaFinal = 2.9;
let aprobacion;
let resultadoFinal = "vacio";

if (notaFinal >= 3) {
    aprobacion = true
} else if (notaFinal < 3) {
    aprobacion = false
}

if (aprobacion === true) {
    resultadoFinal = "fue aprobado"
} else if (aprobacion === false) {
    resultadoFinal = "no aprobado"
}

const estudiante1 = new estudiante("samuel", 1022, resultadoFinal );
const estudiante2 = new estudiante("santiago", 1033, resultadoFinal );
const estudiante3 = new estudiante("samuel", 1022, resultadoFinal );

console.log(estudiante1.mostrarResultado())