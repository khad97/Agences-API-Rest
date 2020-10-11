const express = require('express');
const mongoose = require('mongoose');

const Agence = require('../DataBase/Agence')

const route = express.Router();

//create agence
route.post('/', async(req, res) => {
    const { Id, Nom, Pays, Region, Secteur } = req.body;
    let agence = {};
    agence.Id = Id;
    agence.Nom = Nom;
    agence.Pays = Pays;
    agence.Region = Region;
    agence.Secteur = Secteur;
    let agenceModel = new Agence(agence);
    await agenceModel.save();
    res.json(agenceModel);
});

// Getting all
route.get('/', async(req, res) => {
    try {
        const agences = await Agence.find();
        res.json(agences);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = route;