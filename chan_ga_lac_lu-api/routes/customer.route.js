const express = require('express')
const customerModel = require ('../models/customer.model')

const router = express.Router();

router.get('/', async function (req, res){
    const list = await customerModel.all();
    res.json(list)
})

router.get('/:id', async function(req, res){
    const id = req.params.id || 0;
    const customer = await customerModel.single(id);
    if (customer === null){
        return res.status(204).end()
    }
    res.json(customer)
})

router.post('/', async function(req, res){
    const customer = req.body;
    const ids = await customerModel.add(customer);
    customer.customer_id = ids[0];
    res.status(201).json(customer)
})

router.post('/check-to-post', async function(req, res){
    const customer = await customerModel.singleByNamePhone(req.name,req.phone);
    if (customer === null){
        const ids = await customerModel.add(customer);
        customer.customer_id = ids[0];
        res.status(201).json(customer)
    }
    else{
        res.json(customer)
    }
})

router.delete('/:id', function(req, res){

})

module.exports = router;