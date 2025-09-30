// clase Persona
function Persona(nombre, edad, dni, sexo, peso, altura, anioNac) {
  this.nombre = nombre
  this.edad = edad
  this.dni = dni
  this.sexo = sexo
  this.peso = peso
  this.altura = altura
  this.anio = anioNac

  // mostrar a que generacion pertenece
  this.mostrarGeneracion = function() {
    let gen = ""
    let rasgo = ""

    if(this.anio >= 1994 && this.anio <= 2010){
      gen = "Generacion Z"
      rasgo = "Irreverencia"
    } else if(this.anio >= 1981 && this.anio <= 1993){
      gen = "Generacion Y"
      rasgo = "Frustracion"
    } else if(this.anio >= 1969 && this.anio <= 1980){
      gen = "Generacion X"
      rasgo = "Obsesion por el exito"
    } else if(this.anio >= 1949 && this.anio <= 1968){
      gen = "Baby Boom"
      rasgo = "Ambicion"
    } else if(this.anio >= 1930 && this.anio <= 1948){
      gen = "Silent"
      rasgo = "Austeridad"
    } else {
      gen = "No definida"
      rasgo = "-"
    }

    alert(this.nombre + " pertenece a " + gen + " y su rasgo es " + rasgo)
  }

  // mostrar si es mayor de edad
  this.esMayorDeEdad = function() {
    if(this.edad >= 18){
      alert(this.nombre + " es mayor de edad")
    } else {
      alert(this.nombre + " no es mayor de edad")
    }
  }

  // mostrar todos los datos
  this.mostrarDatos = function() {
    alert(
      "Nombre: " + this.nombre + "\n" +
      "Edad: " + this.edad + "\n" +
      "DNI: " + this.dni + "\n" +
      "Sexo: " + this.sexo + "\n" +
      "Peso: " + this.peso + "\n" +
      "Altura: " + this.altura + "\n" +
      "Año nacimiento: " + this.anio
    )
  }
}

let persona = null

// funcion para crear persona desde el formulario
function crearPersona() {
  let nombre = document.getElementById("nombre").value
  let edad = parseInt(document.getElementById("edad").value)
  let dni = document.getElementById("dni").value
  let sexo = document.getElementById("sexo").value
  let peso = parseFloat(document.getElementById("peso").value)
  let altura = parseFloat(document.getElementById("altura").value)
  let anio = parseInt(document.getElementById("anio").value)

  persona = new Persona(nombre, edad, dni, sexo, peso, altura, anio)
  alert("Persona creada")
}
