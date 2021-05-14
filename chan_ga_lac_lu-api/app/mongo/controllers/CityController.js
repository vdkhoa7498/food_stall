const MongoModels = require("../db/models/index")

const City = MongoModels.CityModel;

const insertCity = async(req, res) => {
    if (req) {
        const reqCity = {
            value: req.body.value,
        };
        let newCity = new City(reqCity);
        await newCity.save();
        res.send(newCity);
    }
};

const getListCity = async(req, res) => {
    const listCity = await City.find().exec();
    res.send(listCity);

};

const deleteCityByName = async(req, res) => {
    const listCity = await City.deleteOne({ value: req.value }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    res.send(listCity);

};

module.exports = {
    insertCity,
    getListCity,
    deleteCityByName
}
