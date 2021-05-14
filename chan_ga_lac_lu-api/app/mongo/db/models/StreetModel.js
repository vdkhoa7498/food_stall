const mongoose = require("mongoose")

const { Schema } = mongoose;

const streetSchema = Schema({
    value: {
        type: String,
        required: true,
    }
}, {
    collection: 'street'
});


module.exports = mongoose.model('street', streetSchema)