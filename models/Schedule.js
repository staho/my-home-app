const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scheduleSchema = new Schema({
    period: String,  //todo: possibly introduce the type for each period type (w - weekly, y - yearly, m - monthly, q - quatterly)
    frequency: Number
})

module.exports = mongoose.model('Schedule', scheduleSchema)