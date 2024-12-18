import SuperHero from '../models/SuperHero.mjs'
import IRepository from './IRepository.mjs'

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id){
        return await SuperHero.findById(id)
    }
    async obtenerTodos(){
        return await SuperHero.find()
    }
    async buscarPorAtributo(atributo, valor){
        const query = { [atributo]: new RegExp(valor, 'i') }
        return await SuperHero.find(query)
    }
    async obtenerMayoresDe30(){
        return await SuperHero.find({ edad: {$gt: 30}, planetaOrigen: 'Tierra', $expr: { $gte: [{ $size: "$poderes" }, 2] }})
    }
    async crearSuperHeroe(datosSuperHeroe) {
        try {
            // Crea una instancia del modelo con los datos proporcionados
            const nuevoSuperHeroe = new SuperHero(datosSuperHeroe);
            // Guarda el superhéroe en la base de datos
            return await nuevoSuperHeroe.save();
        } catch (error) {
            throw new Error(`Error al crear el superhéroe: ${error.message}`);
        }
    }

    async findByIdAndUpdate(id, data) {
        return SuperHero.findByIdAndUpdate(id, data, { new: true });
    }

    async findByIdAndDelete(id){
        return SuperHero.findByIdAndDelete(id)
    }

    async findByNameAndDelete(nombreSuperHeroe){
        return SuperHero.findOneAndDelete({ nombreSuperHeroe : nombreSuperHeroe})
    }
}

export default new SuperHeroRepository()