const estudiantesService = require('../services/estudiantes.services');

const obtenerTodos = (req, res) => {
    res.json(estudiantesService.obtenerTodos());
};

const obtenerEstudiantePorId = (req, res) => {
    const estudiante = estudiantesService.obtenerPorId(Number(req.params.id));

    if (!estudiante) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    res.json(estudiante);
};

const crearEstudiante = (req, res) => {
    const { nombre, correo, edad } = req.body;

    if (!nombre || !correo || edad === undefined) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    res.status(201).json(
        estudiantesService.crear({ nombre, correo, edad })
    );
};

const actualizarEstudiante = (req, res) => {
    const estudiante = estudiantesService.actualizar(
        Number(req.params.id),
        req.body
    );

    if (!estudiante) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    res.json({
        message: 'Estudiante actualizado correctamente',
        estudiante
    });
};

const eliminarEstudiante = (req, res) => {
    const estudiante = estudiantesService.eliminar(Number(req.params.id));

    if (!estudiante) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    res.json({
        message: 'Estudiante eliminado correctamente',
        estudiante
    });
};

module.exports = {
    obtenerTodos,
    obtenerEstudiantePorId,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};
