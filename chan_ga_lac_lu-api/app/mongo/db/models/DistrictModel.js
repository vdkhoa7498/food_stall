const mongoose = require("mongoose")

const { Schema } = mongoose;

const districtSchema = Schema({
    value: {
        type: String,
        required: true,
    }
}, {
    collection: 'district'
});


module.exports = mongoose.model('district', districtSchema)