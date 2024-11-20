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
    crearSuperHeroe(datosSuperHeroe){
        throw new Error("Metodo 'crearSuperHeroe()' no implementado")
    }
    findByIdAndUpdate(datosSuperHeroe){
        throw new Error("Metodo 'findByIdAndUpdate()' no implementado")
    }
    findByIdAndDelete(id){
        throw new Error("Metodo 'findByIdAndDelete()' no implementado")
    }
    findByNameAndDelete(id){
        throw new Error("Metodo 'findByNameAndDelete()' no implementado")
    }
}

export default IRepositoy