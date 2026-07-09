function equiposComputo(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const equipo = new equiposComputo("HP", "RYZEN 5", 8, 500000)
const equipo2 = new equiposComputo("LENOVO", "RYZEN 3", 8, 500000)
const equipo3 = new equiposComputo("ASUS", "INTEL 8", 8, 500000)
const equipo4 = new equiposComputo("LENOVO", "INTEL 7", 8, 500000)

const equipos = [
    equipo,
    equipo2,
    equipo3,
    equipo4
]

console.log(equipos)