const express = require('express')
const cors = require('cors');
const OrderController = require('../app/mongo/controllers/OrderController')

const router = express.Router();

router.use('*', cors());

router.get('/', async function (req, res){
    
    if (req.query.status){
        OrderController.getListOrderByStatus(req, res)
        console.log('get status')
    }
    else{
        OrderController.getListOrder(req, res)
        console.log('get all')
    }
    
})


router.get('/:id', async function(req, res){
    OrderController.findOrderById(req, res)
})

router.post('/', async function(req, res){
    OrderController.insertOrder(req, res)
})

router.put('/:id', function(req, res){
    OrderController.updateOrderStatus(req, res)
})

module.exports = router;