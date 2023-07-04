/**
 * Définition du schéma de Lodging
 **/
const mongooseLodging = require("mongoose");

const lodgingSchema = mongooseLodging.Schema({
    title: { type: String, required: true },
    cover: { type: String, required: true },
    pictures: { type: Array, required: true },
    description: { type: String, required: true },
    host: {
        name: { type: String, required: true },
        picture: { type: String, required: true }
    },
    rating: { type: String, required: true },
    location: { type: String, required: true },
    equipments: { type: Array, required: true },
    tags: { type: Array, required: true },
});

//export
module.exports = mongooseLodging.model("Lodging", lodgingSchema);