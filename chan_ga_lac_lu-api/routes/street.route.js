const express = require('express')
const StreetController = require("../app/mongo/controllers/StreetController");

const router = express.Router();

router.get('/', function (req, res){
    StreetController.getListStreet(req, res)
})

router.post('/', function(req, res){
    StreetController.insertStreet(req, res)
})


module.exports = router;