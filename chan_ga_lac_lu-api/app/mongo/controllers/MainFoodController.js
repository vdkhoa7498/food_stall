const MongoModels = require("../db/models/index")

const MainFood = MongoModels.MainFoodModel;

const insertMainFood = async(req, res) => {
    if (req) {
        const reqMainFood = {
            foodName: req.body.foodName,
        };
        let newMainFood = new MainFood(reqMainFood);
        await newMainFood.save();
        res.send(newMainFood);
    }
};

const getListMainFood = async(req, res) => {
    const listMainFood = await MainFood.find().exec();
    res.send(listMainFood);

};

const deleteMainFoodByName = async(req, res) => {
    const listMainFood = await MainFood.deleteOne({ value: req.value }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    res.send(listMainFood);

};

const deleteMainFoodById = async(req, res) => {
    
    const listMainFood = await MainFood.deleteOne({ _id: req.params.id }, function (err) {
        console.log(err)
        // deleted at most one tank document
      });
    res.send(listMainFood);

};

const updateMainFoodById = async(req, res) => {
    const mainFood = await MainFood.findOne();
    mainFood.foodName = req.body.foodName;
    await mainFood.save();
    res.send(mainFood);

};

module.exports = {
    insertMainFood,
    getListMainFood,
    deleteMainFoodByName,
    deleteMainFoodById,
    updateMainFoodById
}
