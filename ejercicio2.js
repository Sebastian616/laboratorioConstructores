function mascota(nombre, especie, edad, peso, ) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentacionMascota = function() {
        return `mi nombre es ${datosMascota1.nombre} soy un ${datosMascota1.especie} tengo ${datosMascota1.edad} años y peso ${datosMascota1.peso} kg`;
    };
}
const datosMascota1 = new mascota("firulais", "golden retriever", 5, 10)
const datosMascota2 = new mascota("max", "chihuahua", 7, 5)
const datosMascota3 = new mascota("luna", "labrador", 5, 10)
const datosMascota4 = new mascota("abby", "golden retriever", 5, 10);

console.log(datosMascota1)
console.log(datosMascota1.presentacionMascota())