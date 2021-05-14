const mongoose = require("mongoose")

mongoose.Promise = Promise;

module.exports.connect = async() => {
    
    const dbConnectionString = "mongodb://localhost:27017/ChanGaLacLuDB";
    try {
        await mongoose.connect(dbConnectionString, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to mongo !!!")
    } catch (error) {
        console.log("Could not connect to MongoDB ", error)
    }
}