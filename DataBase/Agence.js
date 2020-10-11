const mongoose = require('mongoose');

const agence = new mongoose.Schema({
    Id: {
        type: Number
    },
    Nom: {
        type: String
    },
    Pays: {
        type: String
    },
    Region: {
        type: String
    },
    Secteur: {
        type: String
    }
})

module.exports = Agence = mongoose.model('agence', agence);