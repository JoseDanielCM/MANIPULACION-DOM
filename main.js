const elemento = document.getElementById("elementoPrueba")
// ************* Ejercicio 1 ***********************//
const verificarElementoclase = function (elemento, clase) {
    console.log(`El elemento tiene la clase ${clase} : ${elemento.classList.contains(clase)}`);
}

// ************* Ejercicio 2 ***********************//
const cantidadClases = function (elemento) {
    console.log(`El elemento tiene ${elemento.classList.length} clases`);
}

// ************* Ejercicio 3  ***********************//
const mostrarClases = function (elemento) {
    console.log(`Las clases que tiene el elemento son:`)
    for (let index = 0; index < elemento.classList.length; index++) {

        console.log("- " + elemento.classList.item(index))
    }
}

// ************* Ejercicio 5  ***********************//
const agregarClases = function (elemento, ...clases) {
    console.log("ANTES")
    mostrarClases(elemento)
    for (const clase of clases) {
        elemento.classList.add(clase)
    }
    console.log("DESPUÉS")
    mostrarClases(elemento)
}

// ************* Ejercicio 6  ***********************//
const quitarClase = function (elemento, ...clases) {
    console.log("ANTES")
    mostrarClases(elemento)
    for (const clase of clases) {
        elemento.classList.remove(clase)
    }
    console.log("DESPUÉS")
    mostrarClases(elemento)
}

// ************* Ejercicio 7  ***********************//
const toggleClase = function (elemento, clase) {
    elemento.classList.toggle(clase)
    mostrarClases(elemento)
}

// ************* Ejercicio 8  ***********************//
const toggleClaseBooleano = function (elemento, clase, boolean) {
    elemento.classList.toggle(clase, boolean)
    mostrarClases(elemento)
}

// ************* Ejercicio 9  ***********************//
const reemplazarClase = function (elemento, clase1, clase2) {
    elemento.classList.replace(clase1, clase2)
    mostrarClases(elemento)
}

// ************* PARTE 2  ***********************//

// ************* Ejercicio 1  ***********************//
const devolverNombre = function (elemento) {
    console.log("la etiqueta del elemento es "+elemento.nodeName)
}

// ************ IMPRIMIR RESULTADOS ******************//
console.log("EJERCICIO 1.1")
verificarElementoclase(elemento, "colorRojo")

console.log("EJERCICIO 1.2")
cantidadClases(elemento)

console.log("EJERCICIO 1.3")
mostrarClases(elemento)

console.log("EJERCICIO 1.4")
verificarElementoclase(elemento, "nuevaClase")

console.log("\nEJERCICIO 1.5")
agregarClases(elemento, "clase1", "clase2", "clase3")

console.log("\nEJERCICIO 1.6")
quitarClase(elemento, "clase1", "clase3")
//
console.log("\nEJERCICIO 1.7 (ejecucion 1)")
toggleClase(elemento, "clase2")

console.log("\nEJERCICIO 1.7 (ejecucion 1)")
toggleClase(elemento, "clase2")

console.log("\nEJERCICIO 1.8")
toggleClaseBooleano(elemento, "clase2", false)

console.log("\nEJERCICIO 1.9")
reemplazarClase(elemento,"colorRojo","clase2")

console.log("\n*************************************************************\nParte 2\n")

console.log("\nEJERCICIO 2.1")
devolverNombre(elemento)

