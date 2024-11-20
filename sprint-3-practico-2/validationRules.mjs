import { body } from 'express-validator'

export const registerNewSuperhero = [
    body('nombreSuperHeroe')
      .trim()
      .notEmpty().withMessage('El nombre del superhéroe es obligatorio.')
      .isLength({ min: 3, max: 60 }).withMessage('El nombre debe tener entre 3 y 60 caracteres.')
      .matches(/^\S+$/).withMessage('El nombre no debe contener espacios en blanco.'),
    
    body('nombreReal')
      .trim()
      .notEmpty().withMessage('El nombre real es obligatorio.')
      .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres.')
      .matches(/^\S+$/).withMessage('El nombre real no debe contener espacios en blanco.'),
    
    body('edad')
      .notEmpty().withMessage('La edad es obligatoria.')
      .isInt({ min: 0 }).withMessage('La edad debe ser un número no negativo.')
      .matches(/^\d+$/).withMessage('La edad no debe contener espacios en blanco.'),
  
    body('poderes')
      .isArray({ min: 1 }).withMessage('Poderes debe ser un array con al menos un elemento.')
      .custom((poderes) => {
        poderes.forEach((poder, index) => {
          if (!poder.trim()) {
            throw new Error(`El poder en la posición ${index + 1} está vacío.`);
          }
          if (poder.length < 3 || poder.length > 60) {
            throw new Error(
              `El poder "${poder}" debe tener entre 3 y 60 caracteres.`
            );
          }
        });
        return true;
      }),
]