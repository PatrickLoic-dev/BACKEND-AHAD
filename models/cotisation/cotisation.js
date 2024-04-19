const mongoose = require('mongoose');

const cotisationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    montant: {
        type: Number,
        required: true
    },
    rubrique : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rubrique',
    }

}, { timestamps: true });

const Cotisation = mongoose.model('Cotisation', cotisationSchema);

module.exports = Cotisation;
