import { validationResult } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
    // Obtiene los errores de validación de la solicitud
    const errors = validationResult(req);
  
    // Si hay errores, se envía una respuesta con un estado 400 (Bad Request)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array().map(error => ({
          field: error.param,
          message: error.msg
        }))
      });
    }
  
    // Si no hay errores, se llama al siguiente middleware
    next();
};