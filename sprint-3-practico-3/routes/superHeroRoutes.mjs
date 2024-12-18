import express from 'express'

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    updateSuperheroController,
    deleteSuperheroController,
    deleteSuperheroByNameController,
    agregarSuperheroeController,
    editarSuperheroeController
} from '../controllers/superheroesController.mjs'

import { handleValidationErrors } from '../errorMiddleware.mjs'
import { registerNewSuperhero } from '../validationRules.mjs'

const router = express.Router()

router.get('/heroes/agregar', (req, res) => {
    res.render('heroes/addSuperhero', { titulo: 'Agregar Superhéroe' });
  });
router.get('/heroes', obtenerTodosLosSuperheroesController)
//router.get('/heroes/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/buscar/mayores-30', obtenerSuperheroesMayoresDe30Controller)
router.post('/heroes/crearNuevo',registerNewSuperhero, handleValidationErrors, crearSuperheroeController)
router.post('/heroes/agregar', registerNewSuperhero, handleValidationErrors, agregarSuperheroeController)
router.put('/heroes/actualizar/:id', updateSuperheroController)
router.delete('/heroes/eliminar/:id', deleteSuperheroController)
router.delete('/heroes/eliminar/nombre/:nombre', deleteSuperheroByNameController)
router.get('/heroes/:id/edit', obtenerSuperheroePorIdController); // Mostrar el formulario con datos precargados
router.post('/heroes/:id/edit', registerNewSuperhero, handleValidationErrors, editarSuperheroeController); // Actualizar el superhéroe




export default router