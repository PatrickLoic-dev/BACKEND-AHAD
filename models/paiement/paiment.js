const mongoose = require('mongoose');

const paimentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    montant: {
        type: Number,
        required: true
    },
    // ...
}, {timestamps : true});

const Paiment = mongoose.model('Paiment', paimentSchema);

module.exports = Paiment;