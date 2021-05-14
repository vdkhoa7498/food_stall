const mongoose = require("mongoose")

const { Schema } = mongoose;

const mainFoodSchema = Schema({
    foodName: {
        type: String,
    }
}, {
    collection: 'mainFood'
});


module.exports = mongoose.model('mainFood', mainFoodSchema)