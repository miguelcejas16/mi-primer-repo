export class IRepository {
    async getAll() {
        throw new Error('Metodo getAll no implementado en el repository');
    }

    async create(data) {
        throw new Error('Metodo create no implementado en el repository');
    }
    
    async findById(id) {
        throw new Error('Metodo FindById no implementado en el repository');
    }

    async update(id, countryData) {
        throw new Error('Metodo update no implementado en el repository');
    }

    async deleteById(id){
        throw new Error('Metodo delete por ID no implementado en el repository')
    }
}