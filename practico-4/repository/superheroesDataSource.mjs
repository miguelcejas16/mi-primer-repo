export default class SuperheroesDataSource {
    //Metodo abstracto para obtener todos los super
    obtenerTodos() {
        throw new Error('Este metodo debe ser implementado por la subclase')
    }
}