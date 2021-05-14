const express = require('express')
const CityController = require("../app/mongo/controllers/CityController");

const router = express.Router();

router.get('/', function (req, res){
    CityController.getListCity(req, res)
})

router.post('/', function(req, res){
    CityController.insertCity(req, res)
})


module.exports = router;