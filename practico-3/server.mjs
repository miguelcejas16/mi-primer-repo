import express from 'express'

const app = express()
const PORT = 3001

//Ruta GET con parametro de consulta
//Solicitud: http://localhost:3001/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad
    console.log(`Edad Recibida: ${edad}`)
    res.send(`edad del perfil ${edad}`)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})