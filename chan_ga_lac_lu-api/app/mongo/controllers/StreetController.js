const MongoModels = require("../db/models/index")

const Street = MongoModels.StreetModel;

const insertStreet = async(req, res) => {
    if (req) {
        const reqStreet = {
            value: req.body.value,
        };
        let newStreet = new Street(reqStreet);
        await newStreet.save();
        res.send(newStreet);
    }
};

const getListStreet = async(req, res) => {
    const listStreet = await Street.find().exec();
    res.send(listStreet);

};

const deleteStreetByName = async(req, res) => {
    const listStreet = await Street.deleteOne({ value: req.value }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    res.send(listStreet);

};

module.exports = {
    insertStreet,
    getListStreet,
    deleteStreetByName
}
