const MongoModels = require("../db/models/index")

const District = MongoModels.DistrictModel;

const insertDistrict = async(req, res) => {
    if (req) {
        const reqDistrict = {
            value: req.body.value,
        };
        let newDistrict = new District(reqDistrict);
        await newDistrict.save();
        res.send(newDistrict);
    }
};

const getListDistrict = async(req, res) => {
    const listDistrict = await District.find().exec();
    res.send(listDistrict);

};

const deleteDistrictByName = async(req, res) => {
    const listDistrict = await District.deleteOne({ value: req.value }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    res.send(listDistrict);

};

module.exports = {
    insertDistrict,
    getListDistrict,
    deleteDistrictByName
}
