const express = require('express')
const router = express.Router();

const Usuario= require('../models/usuario')

router.get('/', async(req, res)=>{

    const usuarios = await Usuario.find()
    console.log(usuarios)
    res.json(usuarios)   
        
    })
router.get

router.post('/', async(req, res)=>{
    console.log(req.body)
})    
    

module.exports= router