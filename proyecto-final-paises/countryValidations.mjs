import { body } from "express-validator";

export const countryValidations = [
    body('name.official')
        .isLength({ min: 3, max: 90 })
        .withMessage('El nombre oficial debe tener entre 3 y 90 caracteres.'),

    body('capital')
        .custom(value => {
            if (!value) return true; // Permite valores vacíos
            const capitals = value.split(',').map(c => c.trim());
            if (capitals.some(c => c.length < 3 || c.length > 90)) {
                throw new Error('Cada capital debe tener entre 3 y 90 caracteres.');
            }
            return true;
        })
        .withMessage('Ingrese capitales separadas por comas, entre 3 y 90 caracteres cada una.'),

    body('borders')
        .custom(value => {
            if (!value) return true; // Permite valores vacíos
            const borders = value.split(',').map(b => b.trim());
            if (borders.some(b => b.length !== 3 || !/^[A-Z]{3}$/.test(b))) {
                throw new Error('Cada código de frontera debe tener 3 letras mayúsculas.');
            }
            return true;
        })
        .withMessage('Ingrese códigos de frontera separados por comas, de 3 letras mayúsculas cada uno.'),

    body('area')
        .isFloat({ min: 0 })
        .withMessage('El área debe ser un número positivo.'),

    body('population')
        .isInt({ min: 0 })
        .withMessage('La población debe ser un número entero positivo.'),
];