const express = require('express')
const DistrictController = require("../app/mongo/controllers/DistrictController");

const router = express.Router();

router.get('/', function (req, res){
    DistrictController.getListDistrict(req, res)
})

router.post('/', function(req, res){
    DistrictController.insertDistrict(req, res)
})


module.exports = router;