import express from 'express';
import { getAllCountries, createNewCountries, loadCountries, showEditForm, updateCountryById, deleteCountryById } from '../controllers/countryController.mjs';
import { countryValidations } from '../countryValidations.mjs';
import { handleValidationErrors } from '../handleValidationErrors.mjs';

const router = express.Router();

router.get('/new', (req, res) => {
    res.render('newCountry', { title: "Agregar Nuevo Pais"})
})
router.get('/', getAllCountries);
router.post('/', countryValidations, handleValidationErrors, createNewCountries);
router.post('/load', loadCountries);
router.get('/edit/:id', showEditForm)
router.put('/:id', countryValidations, handleValidationErrors, updateCountryById)
router.delete('/:id', deleteCountryById)
// Otras rutas

export default router;