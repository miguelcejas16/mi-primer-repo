import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { connectDB }  from './config/dbConfig.mjs';
import countryRoutes from './routes/countryRoutes.mjs';
import path from 'path'
import methodOverride from 'method-override'

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(expressLayouts);

app.set('layout', 'layout');

//Servir archivos estaticos
app.use(express.static(path.resolve('./public')))

app.use(express.urlencoded({ extended: true })); // Para datos de formularios
app.use(methodOverride('_method'))

connectDB(); // Conectar a la base de datos

app.use(express.json()); // Habilitar el análisis de JSON en las solicitudes
app.use('/countries', countryRoutes); // Usar las rutas de países

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});