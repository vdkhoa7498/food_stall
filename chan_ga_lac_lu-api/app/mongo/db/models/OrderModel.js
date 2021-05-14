const mongoose = require("mongoose")

const { Schema } = mongoose;

const orderSchema = Schema({
    customerId: {
        type: String,
        require: true
    },
    customerInfo: {
        customerName:{
            type: String,
        },
        customerPhone: {
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
    },
    note: {
        type: String,
    },
    shipper: {
        type: String,
    },
    status: {
        type: String,
        default: 'Chưa duyệt',
    },
    purchase: [{
        content: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
    }],
    total:{
        type: Number,
        default: 0
    },
    createdDate:{
        type: Date,
        default: Date.now
    },
}, {
    collection: 'order'
});

//A Seter


module.exports = mongoose.model('order', orderSchema)