import axios from 'axios';
import { CountryRepository } from '../repositories/CountryRepository.mjs';

const countryRepository = new CountryRepository();

const procesarPaises = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all', { timeout: 5000 });
        const paises = response.data;

        const paisesFiltrados = paises.filter(pais => {
            return pais.languages && pais.languages.spa === "Spanish";
        });

        const paisesModificados = paisesFiltrados.map(pais => {
            const paisModificado = { ...pais };

            delete paisModificado.translations;
            delete paisModificado.tld;
            delete paisModificado.cca2;
            delete paisModificado.ccn3;
            delete paisModificado.cca3;
            delete paisModificado.cioc;
            delete paisModificado.idd;
            delete paisModificado.altSpellings;
            delete paisModificado.car;
            delete paisModificado['coatOfArms'];
            delete paisModificado.postalCode;
            delete paisModificado.demonyms;

            paisModificado.creador = "Miguel Cejas Romero";

            return paisModificado;
        });

        return paisesModificados; // Retorna los países modificados
    } catch (error) {
        console.error('Error al procesar los países:', error);
        throw error; // Re-lanza el error para que se maneje en el controlador
    }
};

export const getCountries = async () => {
    try {
        return await countryRepository.getAll();
    } catch (error) {
        console.error("Error en el servicio al obtener paises", error)
        throw error
    }
};

export const createCountries = async (countries) => {
    try {
        return await countryRepository.create(countries)
    } catch (error) {
        console.error("Error en el servicio al crear paises", error)
        throw error
    }
}

export const loadAndCreateCountries = async () => {
    try {
        const processedCountries = await procesarPaises();
        return await countryRepository.create(processedCountries);
    } catch (error) {
        console.error("Error en el servicio al cargar y crear paises", error)
        throw error
    }
}

export const getCountryById = async (id) => {
    try {
        return await countryRepository.findById(id);
    } catch (error) {
        console.error("Error al obtener el país por ID en el servicio:", error);
        throw error;
    }
};

export const updateCountry = async (id, countryData) => {
    try {
        return await countryRepository.update(id, countryData);
    } catch (error) {
        console.error("Error al actualizar el país en el servicio:", error);
        throw error;
    }
};

export const deleteCountry = async (id) => {
    try {
        return await countryRepository.deleteById(id);
    } catch (error) {
        console.error("Error al eliminar el país en el servicio:", error);
        throw error;
    }
};

