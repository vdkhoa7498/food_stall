const mongoose = require("mongoose")

const { Schema } = mongoose;

const customerSchema = Schema({
    customerName: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true,
    },
    facebookId: {
        type: String,
    },
    customerAddress: {
        detail: {
            type: String
        },
        street: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    }
}, {
    collection: 'customer'
});


module.exports = mongoose.model('customer', customerSchema)