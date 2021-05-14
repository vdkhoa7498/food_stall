const express = require('express')
const CustomerController = require('../app/mongo/controllers/CustomerController')

const router = express.Router();

router.get('/', async function (req, res){
    CustomerController.getListCustomer(req, res)
})

router.get('/:id', async function(req, res){
    CustomerController.findCustomerById(req, res)
})


router.post('/', async function(req, res){
    CustomerController.insertCustomer(req, res)
})


router.delete('/:id', function(req, res){
    CustomerController.deleteCustomerById(req, res)
})

module.exports = router;