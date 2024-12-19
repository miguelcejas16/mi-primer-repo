import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs'
import superHeroRepository from '../repositories/SuperHeroRepository.mjs'

export async function obtenerSuperheroPorId(id) {
    return await superHeroRepository.obtenerPorId(id)
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos()
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor)
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30()
}

export async function crearSuperHeroe(datosSuperHeroe) {
    return await superHeroRepository.crearSuperHeroe(datosSuperHeroe)
}

export async function updateSuperhero(id, data) {
    return superHeroRepository.findByIdAndUpdate(id, data);
}

export async function deleteSuperhero(id) {
    return superHeroRepository.findByIdAndDelete(id)
}

export async function deleteSuperheroByName(nombreSuperHeroe) {
    return superHeroRepository.findByNameAndDelete(nombreSuperHeroe)
}