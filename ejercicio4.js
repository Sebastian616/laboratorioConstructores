function Libro(autor, valor, titulo, prestado) {
    this.autor = autor
    this.valor = valor
    this.titulo = titulo
    this.prestado = prestado
    this.prestar = function() {
        if (this.prestado === true) {
            return "no puede prestar el libro " + this.titulo + " debido a que esta ocupado"
        } else if (this.prestado === false) {
            prestado = true
            return "felicidades el libro " + this.titulo + " ha sido prestado"
        } else{
            return "valor no valido"
        }
    }

    this.devolver = function () {
        if (prestado === true) {
            prestado = false
            return "ah devuelto su libro"
        } else {
            return "hay una inconsistencia, verifique el estado del libro"
        }
    }
}


const datosLibros = new Libro("Gabo", 2000, "el coronel no tiene quien le escriba", false)

console.log(datosLibros.prestar())
console.log(datosLibros.devolver())
