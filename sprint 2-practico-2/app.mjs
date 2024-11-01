import mongoose from "mongoose"

mongoose.connect('mongodb+srv://Grupo-20:grupo20@cursadanodejs.ls9ii.mongodb.net/Node-js?retryWrites=true&w=majority')
    .then(() => console.log('Conexión exitosa a MongoDB')) // Muestra un mensaje si la conexión es exitosa.
    .catch(error => console.error('Error al conectar a MongoDB:', error)); // Muestra un error si la conexión falla.

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now }
},  { collection: 'Grupo-20' })

const SuperHero = mongoose.model('SuperHero', superheroSchema)

async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: "Capitán América",
        nombreReal: "Steve Rogers",
        edad: 100,
        planetaOrigen: "Tierra",
        debilidad: "Ninguna conocida, aunque es vulnerable a ataques masivos y manipulaciones mentales",
        poderes: ["Fuerza sobrehumana", "Resistencia sobrehumana", "Agilidad sobrehumana", "Liderazgo", "Maestro en combate cuerpo a cuerpo"],
        aliados: ["Iron Man", "Hulk", "Viuda Negra", "Falcon"],
        enemigos: ["Red Skull", "Hydra", "Baron Zemo"],
        creador: "Miguel Cejas"
    })
    await hero.save()
    console.log('Superheroe Insertado: ', hero)
}

insertSuperHero()

async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 27 } }
    )
    console.log('Resultado de la actualizacion', result)
}

updateSuperHero("Spiderman")

//Eliminar un documento
async function deleteSuperHero(nombreSuperHeroe){
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe })
    console.log('Superheroe eliminado: ', result)
}

deleteSuperHero('Spiderman')

//Buscar Documentos
async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' })
    console.log('Superheroes encontrados: ', heroes)
}

findSuperHeroes()