import { validationResult } from 'express-validator'

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //return res.status(400).json({ errors: errors.array() }); // Devuelve errores en formato JSON
        const extractedErrors = [];
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
        return res.render('newCountry', {errors: extractedErrors, country: req.body, title: 'Errores al agregar un nuevo pais'}) //Renderiza la vista con los errores y los datos ingresados
    }
    next(); // Si no hay errores, continúa con el siguiente middleware/controlador
}