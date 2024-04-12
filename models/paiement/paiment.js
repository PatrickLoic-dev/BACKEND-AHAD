const mongoose = require('mongoose');

const paimentSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true
    },
    event : {
        type: String,
        required: true
    },
    data : {
        type: Object,
        required: true
    },  
    // ...
}, {timestamps : true});

const Paiment = mongoose.model('Paiment', paimentSchema);

module.exports = Paiment;