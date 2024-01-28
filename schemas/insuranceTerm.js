const mongoose = require('mongoose')

const insuranceTermSchema = new mongoose.Schema({
    value: {type: Number, required: true},
    coefficient: {type: Number, required: true},
});

const InsuranceTerm = mongoose.model('InsuranceTerm', insuranceTermSchema);

module.exports = InsuranceTerm
