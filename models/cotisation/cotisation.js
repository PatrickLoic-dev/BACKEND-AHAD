const mongoose = require('mongoose');

const cotisationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    montant: {
        type: Number,
        required: true
    },
    rubrique : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rubrique',
        required: true
    }

}, { timestamps: true });

const Cotisation = mongoose.model('Cotisation', cotisationSchema);

module.exports = Cotisation;