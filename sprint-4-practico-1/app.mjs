import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import { connectDB } from './config/dbConfig.mjs'
import superHeroRoutes from './routes/superHeroRoutes.mjs'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(expressLayouts);

app.set('layout', 'layout');

//Servir archivos estaticos
app.use(express.static(path.resolve('./public')))

// Middleware base
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para datos de formularios

//Conexion a mongo
connectDB()

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pagina Pricipal',
        navbarLinks: [
            { text: 'Inicio', href: '/', icon: '/icons/home.svg' },
            { text: 'Acerca de', href: '/about', icon: '/icons/info.svg' },
            { text: 'Contacto', href: '/contact', icon: '/icons/contact.svg' },
        ]
    })
})

//Configuracion de rutas
app.use('/api', superHeroRoutes)

//Manejo de erroes para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" })
})

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})