import fs from 'fs'

//Leer un archivo de manera asincrona
fs.readFile('D:/mi-proyecto/archivo-modificado.txt', 'utf8', (err, data)=>{
    if (err) throw err
    console.log('Contenido del archivo: ', data)
})

//Escribir un nuevo archivo
fs.writeFile('D:/mi-proyecto/practico-2/fs-ejemplo/newfile.txt', 'Contenido nuevo', (err)=>{
    if (err) throw err
    console.log('Archivo creado y escrito')
})

//Renombrar un archivo
fs.rename('D:/mi-proyecto/practico-2/fs-ejemplo/newfile.txt', 'D:/mi-proyecto/practico-2/fs-ejemplo/NuevoNombre.txt', (err)=>{
    if (err) throw err
    console.log('Archivo renombrado')
})