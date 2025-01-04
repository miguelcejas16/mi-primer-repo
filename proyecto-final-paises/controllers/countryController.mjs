import { createCountries, loadAndCreateCountries, getCountryById, updateCountry, deleteCountry } from '../services/countryService.mjs';
import Country from '../models/Country.mjs';

export const getAllCountries = async (req, res) => {
    try {
        const countries = await Country.findByCreator('Miguel Cejas Romero');
        res.render('index.ejs', { title: "Dashboard de Paises", countries })
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los países' });
    }
};

export const createNewCountries = async (req, res) => {
    try {
        const countries = req.body
        await createCountries(countries)
        res.redirect('countries/')
    } catch (error) {
        res.status(500).json({ error: 'Error al crear los países' });
    }
}

export const loadCountries = async (req, res) => {
    try {
        await loadAndCreateCountries();
        res.status(201).json({ message: "Paises cargados y creados correctamente." });
    } catch (error) {
        console.error("Error en el controlador al cargar paises", error)
        res.status(500).json({ error: 'Error al cargar los países' });
    }
};

export const showEditForm = async (req, res) => {
    try {
        const country = await getCountryById(req.params.id);
        if (!country) {
            return res.status(404).send('País no encontrado');
        }
        res.render('edit', { country , title: "Editar pais"});
    } catch (error) {
        console.error("Error al mostrar el formulario de edición:", error);
        res.status(500).send("Error al mostrar el formulario de edición");
    }
};

export const updateCountryById = async (req, res) => {
    try {
        const updatedCountry = await updateCountry(req.params.id, req.body);
        if (!updatedCountry) {
            return res.status(404).send('País no encontrado');
        }
        res.redirect('/countries'); // Redirigir al dashboard después de la actualización
    } catch (error) {
        console.error("Error al actualizar el país:", error);
        res.status(500).send("Error al actualizar el país");
    }
};

export const deleteCountryById = async (req, res) => {
    try {
        const deletedCountry = await deleteCountry(req.params.id);
        if (!deletedCountry) {
            return res.status(404).send('País no encontrado');
        }
        res.redirect('/countries'); // Redirigir al dashboard después de la eliminación
    } catch (error) {
        console.error("Error al eliminar el país:", error);
        res.status(500).send("Error al eliminar el país");
    }
}