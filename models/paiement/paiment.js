const mongoose = require('mongoose');

const paimentSchema = new mongoose.Schema({
    data : {
        type: Object,
        required: true
    },  
    // ...
}, {timestamps : true});

const Paiment = mongoose.model('Paiment', paimentSchema);

module.exports = Paiment;