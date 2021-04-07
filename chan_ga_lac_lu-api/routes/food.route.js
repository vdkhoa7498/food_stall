const express = require('express')
const foodModel = require ('../models/food.model')

const router = express.Router();

router.get('/', async function (req, res){
    const list = await foodModel.all();
    res.json(list)
})

router.get('/byType', async function (req, res){
    const list = await foodModel.byType(req.query.type);
    res.json(list)
})

router.get('/:id', async function(req, res){
    const id = req.params.id || 0;
    const food = await foodModel.single(id);
    if (food === null){
        return res.status(204).end()
    }
    res.json(food)
})

router.post('/', async function(req, res){
    const food = req.body;
    const ids = await foodModel.add(food);
    
    food.food_id = ids[0];

    res.status(201).json(food)
})

router.delete('/:id', function(req, res){

})

module.exports = router;