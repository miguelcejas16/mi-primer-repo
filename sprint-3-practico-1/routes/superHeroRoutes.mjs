import express from 'express'

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    updateSuperheroController,
    deleteSuperheroController,
    deleteSuperheroByNameController
} from '../controllers/superheroesController.mjs'

const router = express.Router()

router.get('/heroes', obtenerTodosLosSuperheroesController)
router.get('/heroes/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/buscar/mayores-30', obtenerSuperheroesMayoresDe30Controller)
router.post('/heroes/crearNuevo',crearSuperheroeController)
router.put('/heroes/actualizar/:id', updateSuperheroController)
router.delete('/heroes/eliminar/:id', deleteSuperheroController)
router.delete('/heroes/eliminar/nombre/:nombre', deleteSuperheroByNameController)

export default router