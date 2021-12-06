const express = require('express')
const Dog = require('../schemas/dogSchema')
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const dogs = await Dog.find()
        res.json(dogs)
    } catch (err) {
        res.json({message:err})
    }
})

router.get('/:dogId', async (req, res) => {
    try {
        const dog = await Dog.findById(req.params.dogId)
        res.json(dog)
    } catch (err) {
        res.json({message:err})
    }
})

router.post('/' , async (req, res) => {
    const dog = new Dog({
        name: req.body.name,
        color: req.body.color,
        male: req.body.male
    })
    try {
        const savedDog = await dog.save()
        res.status(201).send(savedDog)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.put('/:dogId', async (req, res) => {
    try {
        const updatedDog = await Dog.findByIdAndUpdate(req.params.dogId, { $set: 
                {
                name: req.body.name,
                color: req.body.color,
                male: req.body.male
                }})
        res.status(201).send(updatedDog)
    } catch (err) {
        res.json({message:err})
    }
})

router.delete('/:dogId', async (req, res) => {
    try {
        const deletedDog = await Dog.findByIdAndDelete(req.params.dogId)
        res.json(deletedDog)
    } catch (err) {
        res.json({message:err})
    }
})

module.exports = router
