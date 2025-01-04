import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    name: {
      common: { type: String },
      official: { type: String },
      nativeName: {
        type: Map,
        of: {
          official: { type: String },
          common: { type: String },
        },
      },
    },
    independent: { type: Boolean },
    status: { type: String },
    unMember: { type: Boolean },
    currencies: {
      type: Map,
      of: {
        name: { type: String },
        symbol: { type: String },
      },
    },
    capital: [{ type: String }], // Array de strings
    region: { type: String },
    subregion: { type: String },
    languages: {
      type: Map,
      of: { type: String },
    },
    latlng: [{ type: Number }], // Array de números
    landlocked: { type: Boolean },
    borders: [{ type: String }],
    area: { type: Number },
    flag: { type: String },
    maps: {
      googleMaps: { type: String },
      openStreetMaps: { type: String },
    },
    population: { type: Number },
    gini: {
      type: Map, // Map para manejar años dinámicos como clave
      of: { type: Number },
    },
    fifa: { type: String },
    timezones: [{ type: String }], // Array de strings
    continents: [{ type: String }], // Array de strings
    flags: {
      png: { type: String },
      svg: { type: String },
      alt: { type: String },
    },
    startOfWeek: { type: String },
    capitalInfo: {
      latlng: [{ type: Number }], // Array de números
    },
    creador: { type: String, required: true }, // Campo añadido
  }, { collection: "Grupo-20" });

countrySchema.statics.findByCreator = async function(creatorName) {
  try {
      const countries = await this.find({ creador: creatorName });
      return countries;
  } catch (error) {
      console.error("Error al buscar países por creador:", error);
      return [];
  }
};
  
const Country = mongoose.model('Country', countrySchema);
export default Country