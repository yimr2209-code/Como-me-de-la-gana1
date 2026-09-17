let estudiantes = [
    {
    id: 1,
    nombre: "Michelle",
    correo: "michelle@gmail.com",
    edad: 25
    },
    {
    id: 2,
    nombre: "Carlos",
    correo: "carlos@gmail.com",
    edad: 22
    }
];

const obtenerTodos = () => {
    return estudiantes;
};

const obtenerPorId = (id) => {
    return estudiantes.find((estudiante) => estudiante.id === id);
};

const crear = (datos) => {
    const nuevoEstudiante = {
    id: estudiantes.length + 1,
    ...datos
    };

    estudiantes.push(nuevoEstudiante);

    return nuevoEstudiante;
};

const actualizar = (id, datos) => {
    const indice = estudiantes.findIndex(
        (estudiante) => estudiante.id === id
    );

    if (indice === -1) {
        return null;
    }

    estudiantes[indice] = {
        ...estudiantes[indice],
        ...datos,
        id
    };

    return estudiantes[indice];
};

const eliminar = (id) => {
    const indice = estudiantes.findIndex(
        (estudiante) => estudiante.id === id
    );

    if (indice === -1) {
        return null;
    }

    const estudianteEliminado = estudiantes[indice];

    //eliminar un elemento del arreglo comenzando
    // desde determinada posicion 
    estudiantes.splice(indice, 1);

    return estudianteEliminado;
};


//si crean una funcion pero olvidan exportarla
// despues el controller no podra utilizarla
module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};


