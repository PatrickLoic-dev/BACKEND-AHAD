const mongoose = require('mongoose');

const pretSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    motif: {
        type: String,
        required: true
    },
    preuves: [{
        type: String,
        required: true
    }],
    validePar :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    statut : {
        type :String,
        default : 'false'
    }

    // Autres champs du modèle...

}, { timestamps: true });

const Pret = mongoose.model('Pret', pretSchema);

module.exports = Pret;