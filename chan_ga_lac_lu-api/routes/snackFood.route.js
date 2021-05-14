const express = require('express')
const SnackFoodController = require("../app/mongo/controllers/SnackFoodController");

const router = express.Router();

router.get('/', function (req, res){
    SnackFoodController.getListSnackFood(req, res)
})

router.post('/', function(req, res){
    SnackFoodController.insertSnackFood(req, res)
})

router.put('/:id', function(req, res){
    SnackFoodController.updateSnackFoodById(req, res)
})

router.delete('/:id', function(req, res){
    SnackFoodController.deleteSnackFoodById(req, res)
})

module.exports = router;