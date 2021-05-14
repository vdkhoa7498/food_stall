const mongoose = require("mongoose")

const { Schema } = mongoose;

const saleSessionSchema = Schema({
    status: {
        type: Boolean,
        default: false
    },
    orderList: [{
        orderId:{
            type: String,
            require: true
        }
    }],
    createDate: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: 'saleSession'
});


module.exports = mongoose.model('saleSession', saleSessionSchema)