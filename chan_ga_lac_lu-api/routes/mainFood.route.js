const express = require('express')
const MainFoodController = require("../app/mongo/controllers/MainFoodController");

const router = express.Router();

router.get('/', function (req, res){
    MainFoodController.getListMainFood(req, res)
})

router.post('/', function(req, res){
    MainFoodController.insertMainFood(req, res)
})

router.put('/:id', function(req, res){
    MainFoodController.updateMainFoodById(req, res)
})

router.delete('/:id', function(req, res){
    MainFoodController.deleteMainFoodById(req, res)
})

module.exports = router;