export class IRepository {
    async getAll() {
        throw new Error('Method not implemented.');
    }

    async create(data) {
        throw new Error('Method not implemented.');
    }
    
    async findById(id) {
        throw new Error('Method not implemented.');
    }

    async update(id, countryData) {
        throw new Error('Method not implemented.');
    }

    async deleteById(id){
        throw new Error('Metodo delete por ID no implementado')
    }
}