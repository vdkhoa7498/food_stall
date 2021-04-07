const express = require('express')
const districtModel = require ('../models/district.model')

const router = express.Router();

router.get('/', async function (req, res){
    const list = await districtModel.all();
    res.json(list)
})

router.get('/:id', async function(req, res){
    const id = req.params.id || 0;
    const district = await districtModel.single(id);
    if (district === null){
        return res.status(204).end()
    }
    res.json(district)
})

router.post('/', async function(req, res){
    const district = req.body;
    const ids = await districtModel.add(district);
    
    district.district_id = ids[0];

    res.status(201).json(district)
})

router.delete('/:id', function(req, res){

})

module.exports = router;