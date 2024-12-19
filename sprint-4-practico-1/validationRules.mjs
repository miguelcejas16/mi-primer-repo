import { body } from 'express-validator'

export const registerNewSuperhero = [
  body('nombreSuperHeroe')
    .trim()
    .notEmpty().withMessage('El nombre del superhéroe es obligatorio.')
    .isLength({ min: 3, max: 60 }).withMessage('Debe tener entre 3 y 60 caracteres.'),
  body('nombreReal')
    .trim()
    .notEmpty().withMessage('El nombre real es obligatorio.')
    .isLength({ min: 3, max: 60 }).withMessage('Debe tener entre 3 y 60 caracteres.'),
  body('edad')
    .notEmpty().withMessage('La edad es obligatoria.')
    .isInt({ min: 0 }).withMessage('Debe ser un número no negativo.'),
  body('planetaOrigen')
    .optional()
    .isLength({ max: 60 }).withMessage('Debe tener como máximo 60 caracteres.'),
  body('debilidad')
    .optional()
    .isLength({ max: 60 }).withMessage('Debe tener como máximo 60 caracteres.'),
  body('poderes')
    .notEmpty().withMessage('Los poderes son obligatorios.')
    .custom(value => {
      const poderes = value.split(',').map(p => p.trim());
      if (poderes.some(p => p.length < 3 || p.length > 60)) {
        throw new Error('Cada poder debe tener entre 3 y 60 caracteres.');
      }
      return true;
    }),
  body('aliados')
    .optional()
    .custom(value => {
      const aliados = value.split(',').map(a => a.trim());
      if (aliados.some(a => a.length < 3 || a.length > 60)) {
        throw new Error('Cada aliado debe tener entre 3 y 60 caracteres.');
      }
      return true;
    }),
  body('enemigos')
    .optional()
    .custom(value => {
      const enemigos = value.split(',').map(e => e.trim());
      if (enemigos.some(e => e.length < 3 || e.length > 60)) {
        throw new Error('Cada enemigo debe tener entre 3 y 60 caracteres.');
      }
      return true;
    }),
];
