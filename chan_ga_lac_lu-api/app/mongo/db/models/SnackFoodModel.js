const mongoose = require("mongoose")

const { Schema } = mongoose;

const snackFoodSchema = Schema({
    foodName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    collection: 'snackFood'
});


module.exports = mongoose.model('snackFood', snackFoodSchema)