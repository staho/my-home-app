const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantKindSchema = new Schema({
    name: String,
    latinName: String,
    description: String
})

module.exports = mongoose.model('PlantKind', plantKindSchema)