import os, { arch } from 'os'

//Obtener la arquitectura del sistema
console.log('Arquitectura del sistema: ', os.arch())

//Obtener tipo de sistema operativo
console.log('Plataforma: ', os.platform())

//Obtener la cantidad total de memoria
console.log('Memoria total: ', os.totalmem())

//Obtener la memoria libre
console.log('Memoria libre: ',os.freemem())

//Obtener la informacion de la CPU
console.log('Informacion de la CPU: ', os.cpus())
