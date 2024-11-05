class IRepositoy {
    obtenerPorId(id){
        throw new Error("Metodo 'ObtenerPorId' no implementado")
    }
    obtenerTodos(){
        throw new Error("Metodo 'obtenerTodos()' no implementado")
    }
    buscarPorAtributo(atributo, valor){
        throw new Error("Metodo 'buscarPorAtributo()' no implementado")
    }
    obtenerMayoresDe30(){
        throw new Error("Metodo 'obtenerMayoresDe30()' no implementado")
    }
}

export default IRepositoy