const mongoose = require('mongoose');

const rubriqueSchema = new mongoose.Schema({
    intitule : {
        type: String, 
        required: true,
        unique: true, 
        trim: true
    }, 
    description : {
        type: String, 
        required: true,
        unique: true, 
        trim: true
    },
    montant :{
        type : Number, 
        required: true, 
        maxLength: 20,
        trim: true
    }
})

const Rubrique = mongoose.model('Rubrique', rubriqueSchema);

module.exports = Rubrique;