import { obtenerSuperheroPorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, crearSuperHeroe, updateSuperhero, deleteSuperhero, deleteSuperheroByName} from '../services/superheroesService.mjs'
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs'

export async function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params
    const superheroe = await obtenerSuperheroPorId(id)

    if(superheroe) {
        res.render('heroes/editSuperhero', { superheroe : superheroe, titulo: 'Editar Superheroe' })
    } else {
        res.status(404).send({ mensaje: "Superheroe no encontrado" })
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = await obtenerTodosLosSuperheroes()
    res.render('heroes/dashboard', { titulo:"Dashboard de Superheroes", superheroes })  
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params
    const superheroes = await buscarSuperheroesPorAtributo(atributo,valor)

    if(superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes))
    } else {
        res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo" })
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = await obtenerSuperheroesMayoresDe30()
    res.send(renderizarListaSuperheroes(superheroes))
}

export async function crearSuperheroeController(req, res) {
    try {
        const datosSuperHeroe = req.body;
        const superHeroeCreado = await crearSuperHeroe(datosSuperHeroe);
        res.status(201).send(renderizarSuperheroe(superHeroeCreado));
    } catch (error) {
        res.status(400).send({ mensaje: "Error al crear el superhéroe", detalles: error.message });
    }
}

export async function updateSuperheroController(req, res) {
    try {
      const { id } = req.params;
      const updatedHero = await updateSuperhero(id, req.body);
  
      if (!updatedHero) {
        return res.status(404).json({ message: 'Superhéroe no encontrado' });
      }
  
      res.json(updatedHero);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el superhéroe' });
    }
}

export async function deleteSuperheroController(req, res) {
    try {
        const { id } = req.params;
        const deletedHero = await deleteSuperhero(id);
    
        if (!deletedHero) {
          return res.status(404).json({ message: 'Superhéroe no encontrado' });
        }
    
        const superheroes = await obtenerTodosLosSuperheroes()
        res.render('heroes/dashboard', { titulo:"Dashboard de Superheroes", superheroes })
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el superhéroe' });
      }
}

export async function deleteSuperheroByNameController(req, res) {
    const nombre = req.params.nombre;

  try {
    const result = await deleteSuperheroByName(nombre);

    if (result) {
      res.status(200).json({ message: `Héroe ${nombre} eliminado correctamente.` });
    } else {
      res.status(404).json({ message: `Héroe ${nombre} no encontrado.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el héroe.', details: error.message });
  }
}

export async function agregarSuperheroeController(req, res) {
  try {
    const {
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen,
      debilidad,
      poderes,
      aliados,
      enemigos,
    } = req.body;

    const nuevoSuperheroe = {
      nombreSuperHeroe,
      nombreReal,
      edad: parseInt(edad, 10),
      planetaOrigen: planetaOrigen || 'Desconocido',
      debilidad: debilidad || null,
      poderes: poderes.split(',').map(p => p.trim()),
      aliados: aliados ? aliados.split(',').map(a => a.trim()) : [],
      enemigos: enemigos ? enemigos.split(',').map(e => e.trim()) : [],
    };

    await crearSuperHeroe(nuevoSuperheroe); // Llama al servicio
    res.redirect('/api/heroes'); // Redirige al listado
  } catch (error) {
    res.status(400).render('heroes/addSuperhero', { error: error.message });
  }
}

export async function editarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const {
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen,
      debilidad,
      poderes,
      aliados,
      enemigos,
    } = req.body;

    const datosActualizados = {
      nombreSuperHeroe,
      nombreReal,
      edad: parseInt(edad, 10),
      planetaOrigen: planetaOrigen || 'Desconocido',
      debilidad: debilidad || null,
      poderes: poderes.split(',').map((p) => p.trim()),
      aliados: aliados ? aliados.split(',').map((a) => a.trim()) : [],
      enemigos: enemigos ? enemigos.split(',').map((e) => e.trim()) : [],
    };

    const resultado = await updateSuperhero(id, datosActualizados);

    if (resultado) {
      res.redirect('/api/heroes');
    } else {
      res.status(404).send({ mensaje: 'Superhéroe no encontrado para actualizar.' });
    }
  } catch (error) {
    res.status(500).send({ mensaje: 'Error al actualizar el superhéroe.', detalles: error.message });
  }
}