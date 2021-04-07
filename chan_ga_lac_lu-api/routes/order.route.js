const express = require('express')
const orderModel = require ('../models/order.model')

const router = express.Router();

router.get('/', async function (req, res){
    const list = await orderModel.all();
    res.json(list)
})

router.get('/:id', async function(req, res){
    const id = req.params.id || 0;
    const order = await orderModel.single(id);
    if (order === null){
        return res.status(204).end()
    }
    res.json(order)
})

router.post('/', async function(req, res){
    const order = req.body;
    const ids = await orderModel.add(order);
    
    order.order_id = ids[0];

    res.status(201).json(order)
})

router.delete('/:id', function(req, res){

})

module.exports = router;