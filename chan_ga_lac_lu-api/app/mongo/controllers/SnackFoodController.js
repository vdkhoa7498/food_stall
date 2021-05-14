const MongoModels = require("../db/models/index")

const SnackFood = MongoModels.SnackFoodModel;

const insertSnackFood = async(req, res) => {
    if (req) {
        const reqSnackFood = {
            foodName: req.body.foodName,
            price: req.body.price
        };
        let newSnackFood = new SnackFood(reqSnackFood);
        await newSnackFood.save();
        res.send(newSnackFood);
    }
};

const getListSnackFood = async(req, res) => {
    const listSnackFood = await SnackFood.find().exec();
    res.send(listSnackFood);

};

const deleteSnackFoodByName = async(req, res) => {
    const listSnackFood = await SnackFood.deleteOne({ value: req.value }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    res.send(listSnackFood);

};


const deleteSnackFoodById = async(req, res) => {
    const listSnackFood = await SnackFood.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    res.send(listSnackFood);

};

const updateSnackFoodById = async(req, res) => {
    const snackFood = await SnackFood.findOne();
    snackFood.foodName = req.body.foodName;
    snackFood.price = req.body.price;
    await snackFood.save();
    res.send(snackFood);

};

module.exports = {
    insertSnackFood,
    getListSnackFood,
    deleteSnackFoodByName,
    deleteSnackFoodById,
    updateSnackFoodById
}
