const express = require('express')
const streetModel = require ('../models/street.model')

const router = express.Router();

router.get('/', async function (req, res){
    const list = await streetModel.all();
    res.json(list)
})

router.get('/:id', async function(req, res){
    const id = req.params.id || 0;
    const street = await streetModel.single(id);
    if (street === null){
        return res.status(204).end()
    }
    res.json(street)
})

router.post('/', async function(req, res){
    const street = req.body;
    const ids = await streetModel.add(street);
    
    street.street_id = ids[0];

    res.status(201).json(street)
})

router.delete('/:id', function(req, res){

})

module.exports = router;