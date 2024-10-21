import { agregarSuperheroes, leerSuperheroes } from './utils.mjs'

const archivoOrignial = './superheroes.txt'
const archivoNuevo = './agregarSuperheroes.txt'

agregarSuperheroes(archivoOrignial,archivoNuevo)

const superheroes = leerSuperheroes(archivoOrignial)
console.log('Superheroes ordenados: ')
console.log(superheroes)

//Leer y mostrar la lista de superheroes ordenada
//const superheroes = leerSuperheroes('./superheroes.txt')
//console.log('Superheroes ordenados')
//console.log(superheroes)

