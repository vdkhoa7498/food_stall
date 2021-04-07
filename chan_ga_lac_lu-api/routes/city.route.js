const express = require('express')
const cityModel = require ('../models/city.model')

const router = express.Router();

router.get('/', async function (req, res){
    const list = await cityModel.all();
    res.json(list)
})

router.get('/:id', async function(req, res){
    const id = req.params.id || 0;
    const city = await cityModel.single(id);
    if (city === null){
        return res.status(204).end()
    }
    res.json(city)
})

router.get('/search', async function (req, res){
    const list = await cityModel.all();
    res.json(list)
})

router.post('/', async function(req, res){
    const city = req.body;
    const ids = await cityModel.add(city);
    
    city.city_id = ids[0];

    res.status(201).json(city)
})

router.delete('/:id', function(req, res){

})


module.exports = router;