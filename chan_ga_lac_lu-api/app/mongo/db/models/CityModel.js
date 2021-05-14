const mongoose = require("mongoose")

const { Schema } = mongoose;

const citySchema = Schema({
    value: {
        type: String,
        required: true,
    }
}, {
    collection: 'city'
});


module.exports = mongoose.model('city', citySchema)