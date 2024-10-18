import path from 'path'

//Definir una ruta de un archivo de ejemplo
const filePath = 'D:\mi-proyecto\archivo-modificado.txt'

//Obtener directorio base
const dirName = path.dirname(filePath)
console.log('Directorio base:', dirName)

//Obtener el nombre del archivo sin extension
const baseName = path.basename(filePath)
console.log('Nombre del archivo', baseName)

//Obtener la extension del archivo
const extName = path.extname(filePath)
console.log('Extension del archivo:', extName)

//Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt')
console.log('Nueva ruta', newPath)

