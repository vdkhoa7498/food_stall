const express = require('express')
const addressModel = require ('../models/address.model')

const router = express.Router();

router.get('/', async function (req, res){
    const list = await addressModel.all();
    res.json(list)
})

router.get('/:id', async function(req, res){
    const id = req.params.id || 0;
    const address = await addressModel.single(id);
    if (address === null){
        return res.status(204).end()
    }
    res.json(address)
})

router.post('/', async function(req, res){
    const address = req.body;
    const ids = await addressModel.add(address);
    
    address.address_id = ids[0];

    res.status(201).json(address)
})

router.delete('/:id', function(req, res){

})

module.exports = router;