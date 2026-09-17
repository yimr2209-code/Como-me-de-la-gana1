const express = require('express');
const router = express.Router();

const estudiantesController = require('../controllers/estudiantes.controller');

router.get('/', estudiantesController.obtenerTodos);
router.get('/:id', estudiantesController.obtenerEstudiantePorId);
router.post('/', estudiantesController.crearEstudiante);
router.put('/:id', estudiantesController.actualizarEstudiante);
router.delete('/:id', estudiantesController.eliminarEstudiante);

module.exports = router;