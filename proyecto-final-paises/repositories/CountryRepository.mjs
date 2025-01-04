import Country from '../models/Country.mjs';
import { IRepository } from './IRepository.mjs';

export class CountryRepository extends IRepository {
    
    async getAll() {
        try {
            return await Country.find({});
        } catch (error) {
            console.error("Error al obtener paises", error)
            throw error
        }
    }

    async create(data) {
        try {
            return await Country.insertMany(data);
        } catch (error) {
            console.error("Error al crear paises", error)
            throw error
        }
    }

    async findById(id) {
        try {
            return await Country.findById(id)
        } catch (error) {
            console.error("Error al buscar el pais por ID en el repositorio", error)
            throw error
        }
    }

    async update(id, countryData) {
        try {
            return await Country.findByIdAndUpdate(id, countryData)
        } catch (error) {
            console.error("Error al actualizar el pais en el repositorio", error)
            throw error
        }
    }

    async deleteById(id) {
        try {
            return await Country.findByIdAndDelete(id);
        } catch (error) {
            console.error("Error al eliminar el país en el repositorio:", error);
            throw error;
        }
    }
}